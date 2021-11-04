// Main JS script to call other functions

//! Separate DOM stuff from application logic, keep in separate modules

import { renderHome } from "./components/home";
import { clearProjects } from "./components/home";
import {
  buildNotePopup,
  clearProjectOptions,
  renderProjectOptions,
} from "./components/notepopup";
import {
  popupContainer,
  noteForm,
  inputTitle,
  inputDescrip,
  inputDueDate,
  selectPriority,
} from "./components/notepopup";
import { projectInputForm, saveProjectButton } from "./components/projects";
import { showProjectInput } from "./components/projects";

class Note {
  constructor(title, description, project, duedate, priority) {
    this.title = title;
    this.description = description;
    this.project = project;
    this.duedate = duedate;
    this.priority = priority;
  }
}

let projectsArray = ["Sample To-Dos"];

let myNoteArray = [
  {
    title: "1st note",
    description:
      "Hi! This app is best viewed on a desktop! Add your projects by clicking the '+' on the left. You can sort your notes by project, too.",
    project: projectsArray[0],
    duedate: "2021-09-01", //! not showing in edit
    priority: "High",
    id: 0,
  },
  {
    title: "2nd note",
    description:
      "Greetings, I am the second note. You can click on me to edit and you can click on the trash can to delete me.",
    project: projectsArray[0],
    duedate: "2021-09-04",
    priority: "Medium",
    id: 1,
  },
  {
    title: "3rd note with longer title and text",
    description:
      "Hello, I'm the third note. My priority is low. My title and description are super duper long and show what happens when you exceed the text area. Surprise! You can scroll my content.",
    project: projectsArray[0],
    duedate: "2021-09-30",
    priority: "Low",
    id: 2,
  },
  {
    title: "4th note",
    description:
      "By the way, this project was coded in plain JavaScript and CSS.",
    project: projectsArray[0],
    duedate: "2021-10-31",
    priority: "Medium",
    id: 3,
  },
];
let test = myNoteArray
  .map((note) => {
    return note.title;
  })
  .indexOf("4th note");
console.log(test);

renderHome.newProjectButton.addEventListener("click", () => {
  console.log("new project!");
  projectInputForm.classList.toggle("active");
  console.log(projectInputForm.classList);
  renderProjectInput();
});

saveProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("save project!");
  saveProject();
  console.log(projectsArray);
});

renderHome.newNoteButton.addEventListener("click", () => {
  console.log("new note!");
  renderNotePopup();
  popupContainer.classList.remove("edit");
  popupContainer.classList.add("addnew");
  console.log(popupContainer.classList);
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!popupContainer.classList.contains("edit")) {
    saveNote();
    console.log("saved!");
  } else {
    console.log("you want to edit?");
    saveNote(activeNoteIndex);
    console.log(myNoteArray);
  }
});

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
    } else if (
      !e.target.closest(".saveprojectbtn") &&
      !e.target.closest(".projectinput") &&
      projectInputForm.classList.contains("active")
    ) {
      closeProjectInput();
    }
  },
  true
);

const saveProject = () => {
  const projectName = document.getElementById("project");
  projectsArray.push(projectName.value);
  console.log(projectName.value);
  populateProjects();
  setTimeout(() => closeProjectInput(), 300);
};

const populateProjects = () => {
  clearProjects();
  projectsArray.forEach((project, index) => {
    renderProject(project, index);
  });
  addToStorage();
};

// let sortedNoteArray = [];
let projectDivArray = [];
const renderProject = (project, index) => {
  project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = projectsArray[index];
  renderHome.projectsDiv.appendChild(project);
  projectDivArray.push(project);
  console.log(projectDivArray);
  project.addEventListener("click", () => {
    console.log("you clicked project index", index);
    projectDivArray.forEach((project) => {
      project.classList.remove("activeproject");
    });
    project.classList.add("activeproject");
    // create new note array with project
    const sortedNoteArray = myNoteArray.filter((note) => {
      if (note.project === projectsArray[index]) return note;
    });
    console.log(sortedNoteArray);
    populateBoard(sortedNoteArray);
  });
};

const populateProjectOptions = () => {
  clearProjectOptions();
  projectsArray.forEach((project) => {
    renderProjectOptions(project);
  });
};

let noteId = 4;
const saveNote = (noteNumber) => {
  const noteTitle = document.getElementById("notetitle");
  const noteDescription = document.getElementById("notedescription");
  const noteProject = document.getElementById("project");
  const noteDueDate = document.getElementById("duedate");
  const notePriority = document.getElementById("priority");
  console.log(noteTitle.value);
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteProject.value,
    noteDueDate.value,
    notePriority.value
  );
  if (popupContainer.classList.contains("edit")) {
    myNoteArray.splice(noteNumber, 1, todoNote);
    populateBoard(myNoteArray);
    setTimeout(() => closeNotePopup(), 300);
  } else {
    todoNote.id = noteId;
    myNoteArray.push(todoNote);
    console.log(myNoteArray);
    noteId++;
  }
  //? need to set a unique identifier for a note? To be used for editing? Data-id
  populateBoard(myNoteArray); //! which array to show
  setTimeout(() => closeNotePopup(), 300);
};

const renderProjectInput = () => {
  showProjectInput();
  renderHome.projectsDiv.appendChild(projectInputForm);
};

const closeProjectInput = () => {
  projectInputForm.reset();
  projectInputForm.classList.toggle("active");
  projectInputForm.remove();
};

const renderNotePopup = () => {
  buildNotePopup();
  renderHome.notesContainer.style.opacity = "0.3";
  renderHome.main.insertBefore(popupContainer, renderHome.main.childNodes[1]);
  populateProjectOptions();
};

const closeNotePopup = () => {
  renderHome.notesContainer.style.opacity = "1.0";
  noteForm.reset();
  popupContainer.remove();
  console.log("I'm closing!");
};

// event listener for each project
// sort myNoteArray, look for project, create sortedNoteArray
let activeNoteIndex;

const populateBoard = (noteArray) => {
  //! can use array placeholder for different filtered arrays?
  //! can some of this DOM stuff be written as a function in a module? Started this in note.js
  clearBoard();
  let noteIdentifierCount = 0;
  noteArray.forEach((note, index) => {
    //! re placeholder above
    const blankNote = document.createElement("div");
    //? set data-id here?
    blankNote.setAttribute("data-note-identifier", noteIdentifierCount);
    // console.log(blankNote.getAttribute("data-note-identifier"));
    // console.log(index);
    blankNote.classList.add("note");
    blankNote.addEventListener("click", () => {
      popupContainer.classList.add("edit");
      // let noteNumber = index;
      // let notenumber = blankNote.getAttribute("data-note-identifier"); //? maybe don't need data-note-idenitifer
      // console.log(blankNote.getAttribute("data-note-identifier"));
      console.log("Array position", index);
      console.log("You clicked a blankNote");
      editNote(note.id);
      activeNoteIndex = index;
      console.log("active note index", activeNoteIndex);
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
    const project = document.createElement("div");
    project.textContent = note.project;
    project.title = "Project";
    project.classList.add("notedivproject");
    blankNote.appendChild(project);

    const duedate = document.createElement("div");
    duedate.classList.add("notedivduedate");
    duedate.textContent = note.duedate;
    duedate.title = "Due Date";
    blankNote.appendChild(duedate);
    const priority = document.createElement("div");
    priority.classList.add("notedivpriority");
    // priority.textContent = "Priority: " + note.priority;
    blankNote.appendChild(priority);
    const priorityLabel = document.createElement("div");
    priorityLabel.textContent = "Priority:";
    const priorityValue = document.createElement("div");
    priorityValue.textContent = note.priority;
    priorityValue.title = "Priority";
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
      console.log("TRASH CAN!", index);
      // deleteNote(index);
      deleteNote(note.id);
    });
    noteIdentifierCount++;
    renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
    //? may still need blankNote.forEach eventlistener to get actual note
  });
};

const deleteNote = (id) => {
  let noteIndex = myNoteArray
    .map((note) => {
      return note.id;
    })
    .indexOf(id);
  myNoteArray.splice(noteIndex, 1);
  addToStorage();
  setTimeout(() => {
    populateProjects();
    populateBoard(myNoteArray);
  }, 200);
  console.log("bye array index", noteIndex);
  console.log("bye bye note id", id);
};

// const deleteNote = (index) => {
//   myNoteArray.splice(index, 1);
//   addToStorage();
//   setTimeout(() => populateBoard(myNoteArray), 200);
//   console.log("bye array index", index);
// };

const editNote = (id) => {
  let noteIndex = myNoteArray
    .map((note) => {
      return note.id;
    })
    .indexOf(id);
  renderNotePopup();
  popupContainer.classList.add("edit");
  console.log(popupContainer.classList);
  console.log("Editing index", noteIndex);
  console.log("Editing id", id);
  inputTitle.value = myNoteArray[noteIndex].title;
  inputDescrip.value = myNoteArray[noteIndex].description; // it's working
  project.value = myNoteArray[noteIndex].project;
  inputDueDate.value = myNoteArray[noteIndex].duedate;
  console.log(myNoteArray[noteIndex].duedate);
  selectPriority.value = myNoteArray[noteIndex].priority;
};

const clearBoard = () => {
  while (renderHome.notesContainer.hasChildNodes()) {
    renderHome.notesContainer.removeChild(renderHome.notesContainer.firstChild);
  }
};

renderHome.appTitle.addEventListener("click", () => {
  setTimeout(() => {
    populateProjects();
    populateBoard(myNoteArray);
  }, 300);
});

const addToStorage = () => {
  localStorage.setItem("notes", JSON.stringify(myNoteArray));
  localStorage.setItem("projects", JSON.stringify(projectsArray));
};

const getFromStorage = () => {
  myNoteArray = JSON.parse(localStorage.getItem("notes"));
  projectsArray = JSON.parse(localStorage.getItem("projects"));
};

// If local storage does not exist, create it, otherwise get notes from local storage
if (!localStorage.getItem("notes") || !localStorage.getItem("projects")) {
  addToStorage();
} else {
  getFromStorage();
}

populateProjects();
populateBoard(myNoteArray);
