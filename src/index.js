// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

//? Look at `data-id` attribute to grab notes with event listeners. Look at the game jam.

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

// TODO fix event listener. When I click a note, I get multiple listeners firing

window.addEventListener("click", ({ target }) => {
  if (
    !target.closest(".popupcontainer") &&
    !target.closest(".newnotebutton") &&
    popupContainer.classList.contains("show")
  ) {
    console.log("clicked off the box");
    popupContainer.classList.toggle("show");
    closeNotePopup();
  }
});

//! also think about a newnote module to separate things

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
  populateBoard();
  setTimeout(() => closeNotePopup(), 300);
};

const closeNotePopup = () => {
  renderHome.notesContainer.style.opacity = "1.0"; // brightens background
  noteForm.reset();
  popupContainer.remove();
  console.log("I'm closing!");
};

// for each item in the array, build a note
// populate note divs with object values

const populateBoard = () => {
  clearBoard();
  noteArray.notes.forEach((note, index) => {
    const blankNote = document.createElement("div");
    blankNote.classList.add("note");
    const title = document.createElement("div");
    title.classList.add("notedivtitle");
    title.textContent = note.title;
    blankNote.appendChild(title);
    const description = document.createElement("div");
    description.classList.add("notediv");
    description.textContent = note.description;
    blankNote.appendChild(description);
    const duedate = document.createElement("div");
    duedate.classList.add("notediv");
    duedate.textContent = note.duedate;
    blankNote.appendChild(duedate);
    const priority = document.createElement("div");
    priority.classList.add("notediv");
    priority.textContent = note.priority;
    blankNote.appendChild(priority);
    renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
    blankNote.addEventListener("click", () => {
      console.log("You clicked a note");
      console.log(note);
      editNote();
      // TODO when you click a note, it should open the popup and fill in the existing values
    });
  });
};

const editNote = () => {
  notePopup();
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

const addToStorage = () => {
  localStorage.setItem("notes", JSON.stringify(noteArray.notes));
};

const getFromStorage = () => {
  noteArray.notes = JSON.parse(localStorage.getItem("notes"));
};

// If local storage does not exist, create it, otherwise get notes from local storage
if (!localStorage.getItem("notes")) {
  addToStorage();
} else {
  getFromStorage();
}

populateBoard();
