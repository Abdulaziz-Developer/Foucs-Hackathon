import { useState, useRef } from "react";
import NoteList from "./NoteList";
import { observer } from "mobx-react";
import noteStore from "./noteStore";
import swal from "sweetalert";

function App() {
  const { notes } = noteStore;
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = async () => {
    clearInterval(increment.current);
    setIsPaused(false);

    await swal("Write something here:", {
      content: "input",
    }).then((value) =>
      noteStore.addNote({ para: value, time: formatTime(), date: Date() })
    );

    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return ` ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="App">
      <h1>Focus and Study</h1>
      <div className="timer-area">
        <h1>{formatTime()}</h1>
        <div className="buttons">
          <button onClick={handlePause} className="stop-btn">
            Stop
          </button>
          <button onClick={handleStart} className="start-btn">
            Start
          </button>
        </div>
      </div>
      <NoteList notes={notes} />
    </div>
  );
}

export default observer(App);
