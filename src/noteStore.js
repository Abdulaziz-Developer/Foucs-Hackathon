import { observable, makeObservable } from "mobx";

class NoteStore {
  notes = [];
  constructor() {
    makeObservable(this, {
      notes: observable,
    });
  }
  checkForNotes = () => {
    const stringfyNotes = localStorage.getItem("notes");
    const notes = JSON.parse(stringfyNotes);
    console.log(notes);
    if (notes && notes.length > 0) {
      console.log(notes);
      this.notes = notes;
      console.log(this.notes);
    } else {
      this.notes = [];
      console.log("else");
    }
  };
  addNote = (object) => {
    this.notes.push(object);
    console.log(this.notes);
    localStorage.setItem("notes", JSON.stringify(object));
  };
}

const noteStore = new NoteStore();
noteStore.checkForNotes();
export default noteStore;
