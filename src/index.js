// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

import { renderHome } from "./components/home";
import { notePopup } from "./components/home";

renderHome;
notePopup();

// TODO build note object
// TODO build note array
// TODO render array in notes

class Note {
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

// note array module

const noteArray = (() => {
  const notes = [];
  return { notes };
})();

// module for creating a note

const form = document.getElementById("noteform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");
});

const noteTitle = document.getElementById("notetitle");
const noteDescription = document.getElementById("notedescription");
const noteDueDate = document.getElementById("duedate");
const notePriority = document.getElementById("priority");

const addtoStorage = () => {
  localStorage.setItem("notes", JSON.stringify(noteArray.notes));
};

const getfromStorage = () => {
  noteArray.notes = JSON.parse(localStorage.getItem("notes"));
};

const saveNote = () => {
  todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteDueDate.value,
    notePriority.value
  );
  noteArray.notes.push(todoNote);
  console.log(noteArray.notes);
};

console.log(noteArray.notes);

export { saveNote };
