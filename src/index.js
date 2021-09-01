// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

//? Look at `data-string` attribute to grab notes with event listeners. Look at the game jam.

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

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveNote();
  console.log("saved!");
});

// TODO event listeners good, except for +New Note when popup box is open
// if (e.target !== btn) btn.classList.remove("active"); EXAMPLE

window.addEventListener("click", ({ target }) => {
  if (
    !target.closest(".popupcontainer") &&
    !target.closest(".newnotebutton") &&
    popupContainer.classList.contains("show")
  ) {
    console.log("clicked off the box");
    popupContainer.classList.toggle("show");
    closeNotePopup();
  } else if (
    !popupContainer.classList.contains("show") &&
    target.closest(".note")
  ) {
    console.log("you clicked a note");
    console.log(target.closest(".note"));
    editNote(); //? pass in some useful note id
  }
});

//! also think about a newnote module to separate things. Read the objectives again.

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
  //? need to set a unique identifier for a note? To be used for editing? Data-id
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
    //? set data-id here?
    blankNote.classList.add("note");
    const title = document.createElement("div");
    title.classList.add("notedivtitle");
    title.classList.add("scroll");
    title.textContent = note.title;
    blankNote.appendChild(title);
    const description = document.createElement("div");
    description.classList.add("notediv");
    description.classList.add("scroll");
    description.textContent = note.description;
    blankNote.appendChild(description);
    const duedate = document.createElement("div");
    duedate.classList.add("notedivduedate");
    // duedate.textContent = "Due Date: " + note.duedate;
    blankNote.appendChild(duedate);
    const duedateLabel = document.createElement("div");
    duedateLabel.textContent = "Due Date:";
    const duedateDate = document.createElement("div");
    duedateDate.textContent = note.duedate;
    // duedate.appendChild(duedateLabel);
    duedate.appendChild(duedateDate);
    const priority = document.createElement("div");
    priority.classList.add("notedivpriority");
    // priority.textContent = "Priority: " + note.priority;
    blankNote.appendChild(priority);
    const priorityLabel = document.createElement("div");
    priorityLabel.textContent = "Priority:";
    const priorityValue = document.createElement("div");
    priorityValue.textContent = note.priority;
    switch (note.priority) {
      case "High":
        priorityValue.classList.add("high");
        break;
      case "Medium":
        priorityValue.classList.add("medium");
        break;
      case "Low":
        priorityValue.classList.add("low");
        break;
      default:
        console.log("no priority selected");
    }
    // priority.appendChild(priorityLabel);
    priority.appendChild(priorityValue);
    const trashIconDiv = document.createElement("div");
    trashIconDiv.classList.add("trashicondiv");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash");
    trashIconDiv.appendChild(trashIcon);
    priority.appendChild(trashIconDiv);
    renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
    //? may still need blankNote.forEach eventlistener to get actual note
  });
};

const editNote = () => {
  //? can pass in a note id parameter?
  notePopup();
  // TODO fill in existing values ⬇️ THIS
  // note popup box comes up for a specific note. Need to get the data for that note and put it in the data fields.
  // Need to save the edit by removing the old object and inserting the new object. May need different event listener?
};

const clearBoard = () => {
  while (renderHome.notesContainer.hasChildNodes()) {
    renderHome.notesContainer.removeChild(renderHome.notesContainer.firstChild);
  }
};

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
