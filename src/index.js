// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

//? Look at `data-id` attribute to grab notes with event listeners

import { renderHome } from "./components/home";
import { notePopup } from "./components/home";
import { popupContainer, noteForm } from "./components/home";

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

//! also think about a newnote module to separate things

// save note function

const saveNote = () => {
  const noteTitle = document.getElementById("notetitle");
  const noteDescription = document.getElementById("notedescription");
  const noteDueDate = document.getElementById("duedate");
  const notePriority = document.getElementById("priority");
  console.log(noteTitle.value);
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteDueDate.value,
    notePriority.value
  );
  noteArray.notes.push(todoNote);
  console.log(noteArray.notes);
  clearBoard();
  populateBoard();
  // newPopulateBoard();
  setTimeout(() => closeNotePopup(), 300);
  renderHome.notesContainer.style.opacity = "1.0"; // brightens background
  popupContainer.remove();
  console.log("removed the popupcontainer");
};

const closeNotePopup = () => {
  noteForm.reset();
  console.log("I'm closing!");
};

// for each item in the array, build a note
// populate note divs with object values

// const newPopulateBoard = () => {
//   noteArray.notes.forEach((note, index) => {
//     renderHome.notesContainer.appendChild(blankNote);
//     blankNote.appendChild(title);
//     blankNote.appendChild(description);
//     blankNote.appendChild(duedate);
//     blankNote.appendChild(priority);
//     console.log("blank note!");
//   });
// };

const title = document.createElement("div");
title.classList.add("notedivtitle");
const description = document.createElement("div");
description.classList.add("notediv");
const duedate = document.createElement("div");
duedate.classList.add("notediv");
const priority = document.createElement("div");
priority.classList.add("notediv");
const blankNote = document.createElement("div");
blankNote.classList.add("note");

const populateBoard = () => {
  noteArray.notes.forEach((note, index) => {
    renderHome.notesContainer.appendChild(blankNote);
    console.log("append the note");
    buildNote();
    console.log("build the note");
    title.textContent = note.title;
    description.textContent = note.description;
    duedate.textContent = note.duedate;
    priority.textContent = note.priority;
    console.log("fill in the blanks");
  });
};

const buildNote = () => {
  blankNote.appendChild(title);
  blankNote.appendChild(description);
  blankNote.appendChild(duedate);
  blankNote.appendChild(priority);
  // renderHome.notesContainer.appendChild(blankNote);
};

const clearBoard = () => {
  while (renderHome.notesContainer.hasChildNodes()) {
    renderHome.notesContainer.removeChild(renderHome.notesContainer.firstChild);
  }
};

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveNote();
  console.log("saved!");
});

const addtoStorage = () => {
  localStorage.setItem("notes", JSON.stringify(noteArray.notes));
};

const getfromStorage = () => {
  noteArray.notes = JSON.parse(localStorage.getItem("notes"));
};
