// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

import { renderHome } from "./components/home";
import { buildNotePopup } from "./components/notepopup";
import {
  popupContainer,
  noteForm,
  inputTitle,
  inputDescrip,
  inputDueDate,
  selectPriority,
} from "./components/notepopup";

class Note {
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

let myNoteArray = [
  {
    title: "1st note",
    description:
      "Hi, I'm the first note in the array. You can click on me to edit. 📝",
    duedate: "2021/09/01", //! not showing in edit
    priority: "High",
  },
  {
    title: "2nd note",
    description:
      "Greetings, I am the second note. You can click on the trash can to delete me.",
    duedate: "2021/09/04",
    priority: "Medium",
  },
  {
    title: "3rd note with longer title and text",
    description:
      "Hello, I'm the third note. My priority is low. My title and description are super duper long and show what happens when you exceed the text area. Surprise! You can scroll my content.",
    duedate: "2021/09/30",
    priority: "Low",
  },
];

renderHome.newNoteButton.addEventListener("click", () => {
  console.log("new note!");
  renderNotePopup();
  popupContainer.classList.add("addnew");
  console.log("classlist addnew");
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveNote();
  console.log("saved!");
});

// TODO fine tune event listeners. When editing, note clicks change the edit popup.

renderHome.homeContainer.addEventListener(
  "click",
  (e) => {
    console.log("you clicked the homeContainer");
    if (
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton") &&
      popupContainer.classList.contains("addnew")
    ) {
      closeNotePopup();
      popupContainer.classList.remove("addnew");
    } else if (
      popupContainer.classList.contains("edit") &&
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton")
    ) {
      // e.stopImmediatePropagation();
      closeNotePopup();
      popupContainer.classList.remove("edit");
    }
  },
  true
);
//     e.target !== renderHome.newNoteButton &&
//     popupContainer.classList.contains("show")
//   ) {
//     console.log("You clicked off the popup box");
//     popupContainer.classList.remove("show");
//     closeNotePopup();
//   }
// else if (!popupContainer.classList.contains("show") && e.target == blankNote) {

// }
// });
// if (e.target !== btn) btn.classList.remove("active"); EXAMPLE

// window.addEventListener("click", ({ target }) => {
//   if (
//     !target.closest(".popupcontainer") &&
//     !target.closest(".newnotebutton") &&
//     popupContainer.classList.contains("show")
//   ) {
//     console.log("clicked off the box");
//     popupContainer.classList.toggle("show");
//     closeNotePopup();
//   }
// } else if (
//   !popupContainer.classList.contains("show") &&
//   target.closest(".note")
// ) {
//   console.log("you clicked a note");
//   console.log(target.closest(".note"));
//   editNote(); //? pass in some useful note id
// }
// });

// let noteIdentifierCount = 1;

const saveNote = () => {
  const noteTitle = document.getElementById("notetitle");
  const noteDescription = document.getElementById("notedescription");
  const noteDueDate = document.getElementById("duedate");
  const notePriority = document.getElementById("priority");
  // noteTitle.setAttribute("data-note-identifier", noteIdentifierCount);
  console.log(noteTitle.value);
  // console.log(noteTitle.getAttribute("data-note-identifier"));
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteDueDate.value,
    notePriority.value
  );
  myNoteArray.push(todoNote);
  // noteIdentifierCount++;
  //? need to set a unique identifier for a note? To be used for editing? Data-id
  populateBoard();
  setTimeout(() => closeNotePopup(), 300);
};

const renderNotePopup = () => {
  buildNotePopup();
  renderHome.notesContainer.style.opacity = "0.3"; // fades background, move to index?
  renderHome.main.insertBefore(popupContainer, renderHome.main.childNodes[1]); // move to index?
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
  //! can some of this DOM stuff be written as a function in a module?
  clearBoard();
  let noteIdentifierCount = 0;
  myNoteArray.forEach((note, index) => {
    const blankNote = document.createElement("div");
    //? set data-id here?
    blankNote.setAttribute("data-note-identifier", noteIdentifierCount);
    // console.log(blankNote.getAttribute("data-note-identifier"));
    // console.log(index);
    blankNote.classList.add("note");
    let noteNumber = index;
    blankNote.addEventListener("click", () => {
      popupContainer.classList.add("edit");
      // let noteNumber = index;
      // let notenumber = blankNote.getAttribute("data-note-identifier"); //? maybe don't need data-note-idenitifer
      // console.log(blankNote.getAttribute("data-note-identifier"));
      console.log("Array position", noteNumber);
      console.log("You clicked a blankNote");
      editNote(noteNumber);
    });
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
    trashIconDiv.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      console.log("TRASH CAN!", noteNumber);
      deleteNote(noteNumber);
    });
    // });
    noteIdentifierCount++;
    renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
    //? may still need blankNote.forEach eventlistener to get actual note
  });
};

const deleteNote = (noteNumber) => {
  myNoteArray.splice(noteNumber, 1);
  addToStorage();
  setTimeout(() => populateBoard(), 200);
  console.log("bye array index", noteNumber);
};

const editNote = (noteNumber) => {
  renderNotePopup();
  // popupContainer.classList.add("edit");
  console.log("classlist edit");
  // TODO fill in existing values ⬇️ THIS. NEXT STEP.
  // Need to save the edit by removing the old object and inserting the new object. May need different event listener?
  console.log("Editing", noteNumber);
  inputTitle.value = myNoteArray[noteNumber].title;
  inputDescrip.value = myNoteArray[noteNumber].description; // it's working
  inputDueDate.value = myNoteArray[noteNumber].duedate;
  selectPriority.value = myNoteArray[noteNumber].priority;
  //! need to save the edit but not create a new note
};

const clearBoard = () => {
  while (renderHome.notesContainer.hasChildNodes()) {
    renderHome.notesContainer.removeChild(renderHome.notesContainer.firstChild);
  }
};

const addToStorage = () => {
  localStorage.setItem("notes", JSON.stringify(myNoteArray));
};

const getFromStorage = () => {
  myNoteArray = JSON.parse(localStorage.getItem("notes"));
};

// If local storage does not exist, create it, otherwise get notes from local storage
if (!localStorage.getItem("notes")) {
  addToStorage();
} else {
  getFromStorage();
}

populateBoard();
