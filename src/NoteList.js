import React from "react";
import NoteItem from "./NoteItem";
import { observer } from "mobx-react";

const NoteList = ({ notes }) => {
  const list = notes.map((note) => <NoteItem key={note.para} note={note} />);

  return <div className="cards-area">{list}</div>;
};

export default observer(NoteList);
