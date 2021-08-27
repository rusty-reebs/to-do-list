// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

import { renderHome } from "./components/home";
import { notePopup } from "./components/home";
import { closeNotePopup } from "./components/home";

class Note {
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

const noteArray = (() => {
  const notes = [];
  return { notes };
})();

renderHome.newNoteButton.addEventListener("click", () => {
  console.log("new note!");
  notePopup();
});

const noteTitle = document.getElementById("notetitle");
const noteDescription = document.getElementById("notedescription");
const noteDueDate = document.getElementById("duedate");
const notePriority = document.getElementById("priority");

// save note function

const saveNote = () => {
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteDueDate.value,
    notePriority.value
  );
  noteArray.notes.push(todoNote);
  console.log(noteArray.notes);
  populateBoard();
  setTimeout(() => closeNotePopup(), 300);
  renderHome.notesContainer.style.opacity = "1.0"; // brightens background
  renderHome.main.removeChild(notePopup.popupContainer);
};

export { saveNote };

// for each item in the array, build a note
// populate note divs with object values

const populateBoard = () => {
  noteArray.notes.forEach((note, index) => {
    buildNote();
    console.log("build the note");
    title.textContent = note.title;
    description.textContent = note.description;
    duedate.textContent = note.duedate;
    priority.textContent = note.priority;
  });
};

const title = document.createElement("div");
const description = document.createElement("div");
const duedate = document.createElement("div");
const priority = document.createElement("div");

const buildNote = () => {
  const blankNote = document.createElement("div");
  blankNote.classList.add("note");
  blankNote.appendChild(title);
  blankNote.appendChild(description);
  blankNote.appendChild(duedate);
  blankNote.appendChild(priority);
  renderHome.notesContainer.appendChild(blankNote);
};

const addtoStorage = () => {
  localStorage.setItem("notes", JSON.stringify(noteArray.notes));
};

const getfromStorage = () => {
  noteArray.notes = JSON.parse(localStorage.getItem("notes"));
};
