// Main JS script to call other functions

import { renderHome, clearProjects } from "./components/home";

import {
  buildNotePopup,
  clearProjectOptions,
  renderProjectOptions,
  popupContainer,
  noteForm,
  inputTitle,
  inputDescrip,
  inputDueDate,
  selectPriority,
} from "./components/notepopup";

import {
  projectInputForm,
  saveProjectButton,
  showProjectInput,
} from "./components/projects";

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
    duedate: "2021-09-01",
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

renderHome.newProjectButton.addEventListener("click", () => {
  projectInputForm.classList.toggle("active");
  renderProjectInput();
});

saveProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveProject();
});

renderHome.newNoteButton.addEventListener("click", () => {
  popupContainer.classList.remove("edit");
  popupContainer.classList.add("addnew");
  renderNotePopup();
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!popupContainer.classList.contains("edit")) {
    saveNote();
  } else {
    saveNote(activeNoteIndex);
  }
});

renderHome.homeContainer.addEventListener(
  "click",
  (e) => {
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

let projectDivArray = [];
const renderProject = (project, index) => {
  project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = projectsArray[index];
  renderHome.projectsDiv.appendChild(project);
  projectDivArray.push(project);
  project.addEventListener("click", () => {
    projectDivArray.forEach((project) => {
      project.classList.remove("activeproject");
    });
    project.classList.add("activeproject");
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
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteProject.value,
    noteDueDate.value,
    notePriority.value
  );
  if (popupContainer.classList.contains("edit")) {
    todoNote.id = noteNumber;
    let noteIndex = myNoteArray
      .map((note) => {
        return note.id;
      })
      .indexOf(noteNumber);
    myNoteArray.splice(noteIndex, 1, todoNote);
    populateProjects();
    populateBoard(myNoteArray);
    setTimeout(() => closeNotePopup(), 300);
  } else {
    todoNote.id = noteId;
    myNoteArray.push(todoNote);
    noteId++;
  }
  populateProjects();
  populateBoard(myNoteArray);
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
};

let activeNoteIndex;

const populateBoard = (noteArray) => {
  //! can some of this DOM stuff be written as a function in a module?
  clearBoard();
  noteArray.forEach((note) => {
    const blankNote = document.createElement("div");
    blankNote.classList.add("note");

    blankNote.addEventListener("click", () => {
      popupContainer.classList.add("edit");
      editNote(note.id);
      activeNoteIndex = note.id;
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
    blankNote.appendChild(priority);
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
      deleteNote(note.id);
    });

    renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
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
};

const editNote = (id) => {
  let noteIndex = myNoteArray
    .map((note) => {
      return note.id;
    })
    .indexOf(id);
  popupContainer.classList.add("edit");
  renderNotePopup();
  inputTitle.value = myNoteArray[noteIndex].title;
  inputDescrip.value = myNoteArray[noteIndex].description;
  project.value = myNoteArray[noteIndex].project;
  inputDueDate.value = myNoteArray[noteIndex].duedate;
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
