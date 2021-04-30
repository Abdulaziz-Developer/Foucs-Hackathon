import { observable, makeObservable } from "mobx";

class NoteStore {
  notes = [];
  constructor() {
    makeObservable(this, {
      notes: observable,
    });
  }
  addNote = (object) => {
    this.notes.push(object);
    console.log(this.notes);
  };
}

const noteStore = new NoteStore();
export default noteStore;
