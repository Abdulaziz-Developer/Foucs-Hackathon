import React from "react";
import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div className="card">
      <h1>{note.time}</h1>
      <h3>{note.para}</h3>
      <p>{note.date}</p>
    </div>
  );
};

export default observer(NoteItem);
