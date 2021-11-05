/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "clearProjects": () => (/* binding */ clearProjects)
/* harmony export */ });
// home.js renders the sidebar and main container



const renderHome = (() => {
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homecontainer");
  content.appendChild(homeContainer);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  homeContainer.appendChild(sidebar);

  const main = document.createElement("div");
  main.classList.add("main");
  homeContainer.appendChild(main);

  const appTitle = document.createElement("div");
  appTitle.classList.add("apptitle");
  appTitle.innerHTML = "✅ My To-Do List";
  sidebar.appendChild(appTitle);

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("projectheader");
  projectHeader.innerHTML = "Projects";
  sidebar.appendChild(projectHeader);

  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("newprojectbutton");
  newProjectButton.innerHTML = "+";
  projectHeader.appendChild(newProjectButton);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projectsdiv");
  sidebar.appendChild(projectsDiv);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttoncontainer");
  main.appendChild(buttonContainer);

  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("newnotebutton");
  newNoteButton.innerHTML = "+ New To-Do Note";
  buttonContainer.appendChild(newNoteButton);

  const notesContainer = document.createElement("div");
  notesContainer.classList.add("notescontainer");
  main.appendChild(notesContainer);

  return {
    appTitle,
    homeContainer,
    main,
    notesContainer,
    newNoteButton,
    newProjectButton,
    projectsDiv,
  };
})();

const clearProjects = () => {
  while (renderHome.projectsDiv.hasChildNodes()) {
    renderHome.projectsDiv.removeChild(renderHome.projectsDiv.firstChild);
  }
};




/***/ }),

/***/ "./src/components/notepopup.js":
/*!*************************************!*\
  !*** ./src/components/notepopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupContainer": () => (/* binding */ popupContainer),
/* harmony export */   "noteForm": () => (/* binding */ noteForm),
/* harmony export */   "inputDescrip": () => (/* binding */ inputDescrip),
/* harmony export */   "inputTitle": () => (/* binding */ inputTitle),
/* harmony export */   "inputDueDate": () => (/* binding */ inputDueDate),
/* harmony export */   "selectPriority": () => (/* binding */ selectPriority),
/* harmony export */   "buildNotePopup": () => (/* binding */ buildNotePopup),
/* harmony export */   "clearProjectOptions": () => (/* binding */ clearProjectOptions),
/* harmony export */   "renderProjectOptions": () => (/* binding */ renderProjectOptions)
/* harmony export */ });
// notepopup.js manipulates the DOM to build note popup box for input/edit




const popupContainer = document.createElement("div");
popupContainer.classList.add("popupcontainer");
const popupBox = document.createElement("div");
popupBox.classList.add("popupbox");
const noteForm = document.createElement("form");
noteForm.classList.add("noteform");
noteForm.id = "noteform";
const inputTitle = document.createElement("input");
inputTitle.classList.add("notetitle");
inputTitle.type = "text";
inputTitle.name = "title";
inputTitle.id = "notetitle";
inputTitle.placeholder = "Title";
const inputDescrip = document.createElement("textarea");
inputDescrip.classList.add("description");
inputDescrip.name = "description";
inputDescrip.id = "notedescription";
inputDescrip.placeholder = "Take a note...";
const labelProject = document.createElement("label");
labelProject.classList.add("projectselect");
labelProject.for = "project";
labelProject.innerHTML = "Project:";
const selectProject = document.createElement("select");
selectProject.classList.add("selectproject");
selectProject.name = "project";
selectProject.id = "project";
const labelDueDate = document.createElement("label");
labelDueDate.classList.add("duedate");
labelDueDate.for = "duedate";
labelDueDate.innerHTML = "Due Date:";
const inputDueDate = document.createElement("input");
inputDueDate.classList.add("duedatecal");
inputDueDate.type = "date";
inputDueDate.name = "duedate";
inputDueDate.id = "duedate";
const labelPriority = document.createElement("label");
labelPriority.classList.add("prioritylabel");
labelPriority.for = "priority";
labelPriority.innerHTML = "Priority:";
const selectPriority = document.createElement("select");
selectPriority.classList.add("selectpriority");
selectPriority.name = "priority";
selectPriority.id = "priority";
const highPri = document.createElement("option");
highPri.value = "High";
highPri.innerHTML = "High";
const medPri = document.createElement("option");
medPri.value = "Medium";
medPri.innerHTML = "Medium";
const lowPri = document.createElement("option");
lowPri.value = "Low";
lowPri.innerHTML = "Low";
const noteSubmitButton = document.createElement("button");
noteSubmitButton.type = "submit";
noteSubmitButton.classList.add("savebutton");
noteSubmitButton.name = "submit";
noteSubmitButton.id = "submitnote";
noteSubmitButton.innerHTML = "Save";
const div = document.createElement("div");

const clearProjectOptions = () => {
  while (selectProject.hasChildNodes()) {
    selectProject.removeChild(selectProject.firstChild);
  }
};

const renderProjectOptions = (project) => {
  const option = document.createElement("option");
  option.innerHTML = project;
  option.value = project;
  selectProject.appendChild(option);
};

const buildNotePopup = () => {
  popupContainer.appendChild(popupBox);
  popupBox.appendChild(noteForm);

  noteForm.appendChild(inputTitle);
  noteForm.appendChild(inputDescrip);
  noteForm.appendChild(labelProject);
  noteForm.appendChild(selectProject);
  noteForm.appendChild(labelDueDate);
  noteForm.appendChild(inputDueDate);
  noteForm.appendChild(labelPriority);
  noteForm.appendChild(selectPriority);

  selectPriority.appendChild(highPri);
  selectPriority.appendChild(medPri);
  selectPriority.appendChild(lowPri);

  noteForm.appendChild(noteSubmitButton);
};




/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectInputForm": () => (/* binding */ projectInputForm),
/* harmony export */   "saveProjectButton": () => (/* binding */ saveProjectButton),
/* harmony export */   "showProjectInput": () => (/* binding */ showProjectInput)
/* harmony export */ });
// projects.js

const projectInputForm = document.createElement("form");
const projectInput = document.createElement("input");
projectInput.classList.add("projectinput");
projectInput.type = "text";
projectInput.name = "project";
projectInput.placeholder = "New project name";
projectInput.id = "project";
const saveProjectDiv = document.createElement("div");
saveProjectDiv.classList.add("saveproject");
const saveProjectButton = document.createElement("button");
saveProjectButton.classList.add("saveprojectbtn");
saveProjectButton.innerHTML = "Save";

const showProjectInput = () => {
  projectInputForm.appendChild(projectInput);
  projectInputForm.appendChild(saveProjectDiv);
  saveProjectDiv.appendChild(saveProjectButton);
};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_notepopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/notepopup */ "./src/components/notepopup.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/projects */ "./src/components/projects.js");
// Main JS script to call other functions







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

_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.newProjectButton.addEventListener("click", () => {
  _components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm.classList.toggle("active");
  renderProjectInput();
});

_components_projects__WEBPACK_IMPORTED_MODULE_2__.saveProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveProject();
});

_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.newNoteButton.addEventListener("click", () => {
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.remove("edit");
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.add("addnew");
  renderNotePopup();
});

_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.contains("edit")) {
    saveNote();
  } else {
    saveNote(activeNoteIndex);
  }
});

_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.homeContainer.addEventListener(
  "click",
  (e) => {
    if (
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton") &&
      _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.contains("addnew")
    ) {
      closeNotePopup();
      _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.remove("addnew");
    } else if (
      _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.contains("edit") &&
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton")
    ) {
      closeNotePopup();
      _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.remove("edit");
    } else if (
      !e.target.closest(".saveprojectbtn") &&
      !e.target.closest(".projectinput") &&
      _components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm.classList.contains("active")
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
  (0,_components_home__WEBPACK_IMPORTED_MODULE_0__.clearProjects)();
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
  _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.projectsDiv.appendChild(project);
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
  (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.clearProjectOptions)();
  projectsArray.forEach((project) => {
    (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.renderProjectOptions)(project);
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
  if (_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.contains("edit")) {
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
  (0,_components_projects__WEBPACK_IMPORTED_MODULE_2__.showProjectInput)();
  _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.projectsDiv.appendChild(_components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm);
};

const closeProjectInput = () => {
  _components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm.reset();
  _components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm.classList.toggle("active");
  _components_projects__WEBPACK_IMPORTED_MODULE_2__.projectInputForm.remove();
};

const renderNotePopup = () => {
  (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.buildNotePopup)();
  _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.style.opacity = "0.3";
  _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.main.insertBefore(_components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer, _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.main.childNodes[1]);
  populateProjectOptions();
};

const closeNotePopup = () => {
  _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.style.opacity = "1.0";
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.noteForm.reset();
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.remove();
};

let activeNoteIndex;

const populateBoard = (noteArray) => {
  //! can some of this DOM stuff be written as a function in a module?
  clearBoard();
  noteArray.forEach((note) => {
    const blankNote = document.createElement("div");
    blankNote.classList.add("note");

    blankNote.addEventListener("click", () => {
      _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.add("edit");
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

    _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.appendChild(blankNote);
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
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.popupContainer.classList.add("edit");
  renderNotePopup();
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.inputTitle.value = myNoteArray[noteIndex].title;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.inputDescrip.value = myNoteArray[noteIndex].description;
  project.value = myNoteArray[noteIndex].project;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.inputDueDate.value = myNoteArray[noteIndex].duedate;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_1__.selectPriority.value = myNoteArray[noteIndex].priority;
};

const clearBoard = () => {
  while (_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.hasChildNodes()) {
    _components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.removeChild(_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.notesContainer.firstChild);
  }
};

_components_home__WEBPACK_IMPORTED_MODULE_0__.renderHome.appTitle.addEventListener("click", () => {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sK0VBQTRCO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksbUZBQXFDO0FBQ3pDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUUsK0VBQTRCO0FBQzlCO0FBQ0EsRUFBRSxtRUFBZ0I7QUFDbEIsRUFBRSxxRUFBa0I7QUFDcEI7QUFDQSxFQUFFLHFFQUFrQjtBQUNwQixFQUFFLHVFQUFvQjtBQUN0Qjs7QUFFQTtBQUNBLFNBQVMscUZBQXVDO0FBQ2hELElBQUksbUZBQXFDLENBQUMsa0ZBQW9DO0FBQzlFO0FBQ0E7O0FBRUEsa0ZBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbm90ZXBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob21lLmpzIHJlbmRlcnMgdGhlIHNpZGViYXIgYW5kIG1haW4gY29udGFpbmVyXG5cbmV4cG9ydCB7IHJlbmRlckhvbWUgfTtcblxuY29uc3QgcmVuZGVySG9tZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lY29udGFpbmVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGNvbnN0IGFwcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcHRpdGxlXCIpO1xuICBhcHBUaXRsZS5pbm5lckhUTUwgPSBcIuKchSBNeSBUby1EbyBMaXN0XCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYXBwVGl0bGUpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0aGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3cHJvamVjdGJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcblxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c2RpdlwiKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25jb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3bm90ZWJ1dHRvblwiKTtcbiAgbmV3Tm90ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIisgTmV3IFRvLURvIE5vdGVcIjtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05vdGVCdXR0b24pO1xuXG4gIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGVzY29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG5vdGVzQ29udGFpbmVyKTtcblxuICByZXR1cm4ge1xuICAgIGFwcFRpdGxlLFxuICAgIGhvbWVDb250YWluZXIsXG4gICAgbWFpbixcbiAgICBub3Rlc0NvbnRhaW5lcixcbiAgICBuZXdOb3RlQnV0dG9uLFxuICAgIG5ld1Byb2plY3RCdXR0b24sXG4gICAgcHJvamVjdHNEaXYsXG4gIH07XG59KSgpO1xuXG5jb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICB3aGlsZSAocmVuZGVySG9tZS5wcm9qZWN0c0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICByZW5kZXJIb21lLnByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHJlbmRlckhvbWUucHJvamVjdHNEaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdHMgfTtcbiIsIi8vIG5vdGVwb3B1cC5qcyBtYW5pcHVsYXRlcyB0aGUgRE9NIHRvIGJ1aWxkIG5vdGUgcG9wdXAgYm94IGZvciBpbnB1dC9lZGl0XG5cbmV4cG9ydCB7XG4gIHBvcHVwQ29udGFpbmVyLFxuICBub3RlRm9ybSxcbiAgaW5wdXREZXNjcmlwLFxuICBpbnB1dFRpdGxlLFxuICBpbnB1dER1ZURhdGUsXG4gIHNlbGVjdFByaW9yaXR5LFxufTtcbmV4cG9ydCB7IGJ1aWxkTm90ZVBvcHVwIH07XG5cbmNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cGNvbnRhaW5lclwiKTtcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBvcHVwQm94LmNsYXNzTGlzdC5hZGQoXCJwb3B1cGJveFwiKTtcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5ub3RlRm9ybS5jbGFzc0xpc3QuYWRkKFwibm90ZWZvcm1cIik7XG5ub3RlRm9ybS5pZCA9IFwibm90ZWZvcm1cIjtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5pbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RldGl0bGVcIik7XG5pbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbmlucHV0VGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbmlucHV0VGl0bGUuaWQgPSBcIm5vdGV0aXRsZVwiO1xuaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbmNvbnN0IGlucHV0RGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbmlucHV0RGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5pbnB1dERlc2NyaXAubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbmlucHV0RGVzY3JpcC5pZCA9IFwibm90ZWRlc2NyaXB0aW9uXCI7XG5pbnB1dERlc2NyaXAucGxhY2Vob2xkZXIgPSBcIlRha2UgYSBub3RlLi4uXCI7XG5jb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzZWxlY3RcIik7XG5sYWJlbFByb2plY3QuZm9yID0gXCJwcm9qZWN0XCI7XG5sYWJlbFByb2plY3QuaW5uZXJIVE1MID0gXCJQcm9qZWN0OlwiO1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rwcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG5zZWxlY3RQcm9qZWN0LmlkID0gXCJwcm9qZWN0XCI7XG5jb25zdCBsYWJlbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZWRhdGVcIik7XG5sYWJlbER1ZURhdGUuZm9yID0gXCJkdWVkYXRlXCI7XG5sYWJlbER1ZURhdGUuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTpcIjtcbmNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmlucHV0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZWNhbFwiKTtcbmlucHV0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG5pbnB1dER1ZURhdGUubmFtZSA9IFwiZHVlZGF0ZVwiO1xuaW5wdXREdWVEYXRlLmlkID0gXCJkdWVkYXRlXCI7XG5jb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xubGFiZWxQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlsYWJlbFwiKTtcbmxhYmVsUHJpb3JpdHkuZm9yID0gXCJwcmlvcml0eVwiO1xubGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInNlbGVjdHByaW9yaXR5XCIpO1xuc2VsZWN0UHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcbnNlbGVjdFByaW9yaXR5LmlkID0gXCJwcmlvcml0eVwiO1xuY29uc3QgaGlnaFByaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5oaWdoUHJpLnZhbHVlID0gXCJIaWdoXCI7XG5oaWdoUHJpLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuY29uc3QgbWVkUHJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbm1lZFByaS52YWx1ZSA9IFwiTWVkaXVtXCI7XG5tZWRQcmkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbmNvbnN0IGxvd1ByaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5sb3dQcmkudmFsdWUgPSBcIkxvd1wiO1xubG93UHJpLmlubmVySFRNTCA9IFwiTG93XCI7XG5jb25zdCBub3RlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVTdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG5ub3RlU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYXZlYnV0dG9uXCIpO1xubm90ZVN1Ym1pdEJ1dHRvbi5uYW1lID0gXCJzdWJtaXRcIjtcbm5vdGVTdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdG5vdGVcIjtcbm5vdGVTdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gXCJTYXZlXCI7XG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBjbGVhclByb2plY3RPcHRpb25zID0gKCkgPT4ge1xuICB3aGlsZSAoc2VsZWN0UHJvamVjdC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBzZWxlY3RQcm9qZWN0LnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3QuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RPcHRpb25zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLmlubmVySFRNTCA9IHByb2plY3Q7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn07XG5cbmNvbnN0IGJ1aWxkTm90ZVBvcHVwID0gKCkgPT4ge1xuICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cEJveCk7XG4gIHBvcHVwQm94LmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcblxuICBub3RlRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwKTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcm9qZWN0KTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG4gIG5vdGVGb3JtLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gIG5vdGVGb3JtLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSk7XG4gIG5vdGVGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICBub3RlRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG5cbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaSk7XG4gIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG1lZFByaSk7XG4gIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaSk7XG5cbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZVN1Ym1pdEJ1dHRvbik7XG59O1xuXG5leHBvcnQgeyBjbGVhclByb2plY3RPcHRpb25zLCByZW5kZXJQcm9qZWN0T3B0aW9ucyB9O1xuIiwiLy8gcHJvamVjdHMuanNcblxuY29uc3QgcHJvamVjdElucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xucHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0aW5wdXRcIik7XG5wcm9qZWN0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xucHJvamVjdElucHV0Lm5hbWUgPSBcInByb2plY3RcIjtcbnByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IHByb2plY3QgbmFtZVwiO1xucHJvamVjdElucHV0LmlkID0gXCJwcm9qZWN0XCI7XG5jb25zdCBzYXZlUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zYXZlUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwic2F2ZXByb2plY3RcIik7XG5jb25zdCBzYXZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zYXZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2F2ZXByb2plY3RidG5cIik7XG5zYXZlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNhdmVcIjtcblxuY29uc3Qgc2hvd1Byb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgcHJvamVjdElucHV0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0SW5wdXRGb3JtLmFwcGVuZENoaWxkKHNhdmVQcm9qZWN0RGl2KTtcbiAgc2F2ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoc2F2ZVByb2plY3RCdXR0b24pO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdElucHV0Rm9ybSwgc2F2ZVByb2plY3RCdXR0b24gfTtcbmV4cG9ydCB7IHNob3dQcm9qZWN0SW5wdXQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTWFpbiBKUyBzY3JpcHQgdG8gY2FsbCBvdGhlciBmdW5jdGlvbnNcblxuaW1wb3J0IHsgcmVuZGVySG9tZSwgY2xlYXJQcm9qZWN0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZVwiO1xuXG5pbXBvcnQge1xuICBidWlsZE5vdGVQb3B1cCxcbiAgY2xlYXJQcm9qZWN0T3B0aW9ucyxcbiAgcmVuZGVyUHJvamVjdE9wdGlvbnMsXG4gIHBvcHVwQ29udGFpbmVyLFxuICBub3RlRm9ybSxcbiAgaW5wdXRUaXRsZSxcbiAgaW5wdXREZXNjcmlwLFxuICBpbnB1dER1ZURhdGUsXG4gIHNlbGVjdFByaW9yaXR5LFxufSBmcm9tIFwiLi9jb21wb25lbnRzL25vdGVwb3B1cFwiO1xuXG5pbXBvcnQge1xuICBwcm9qZWN0SW5wdXRGb3JtLFxuICBzYXZlUHJvamVjdEJ1dHRvbixcbiAgc2hvd1Byb2plY3RJbnB1dCxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0c1wiO1xuXG5jbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5sZXQgcHJvamVjdHNBcnJheSA9IFtcIlNhbXBsZSBUby1Eb3NcIl07XG5cbmxldCBteU5vdGVBcnJheSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIjFzdCBub3RlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkhpISBUaGlzIGFwcCBpcyBiZXN0IHZpZXdlZCBvbiBhIGRlc2t0b3AhIEFkZCB5b3VyIHByb2plY3RzIGJ5IGNsaWNraW5nIHRoZSAnKycgb24gdGhlIGxlZnQuIFlvdSBjYW4gc29ydCB5b3VyIG5vdGVzIGJ5IHByb2plY3QsIHRvby5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0wMVwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIjJuZCBub3RlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdyZWV0aW5ncywgSSBhbSB0aGUgc2Vjb25kIG5vdGUuIFlvdSBjYW4gY2xpY2sgb24gbWUgdG8gZWRpdCBhbmQgeW91IGNhbiBjbGljayBvbiB0aGUgdHJhc2ggY2FuIHRvIGRlbGV0ZSBtZS5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0wNFwiLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiM3JkIG5vdGUgd2l0aCBsb25nZXIgdGl0bGUgYW5kIHRleHRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSGVsbG8sIEknbSB0aGUgdGhpcmQgbm90ZS4gTXkgcHJpb3JpdHkgaXMgbG93LiBNeSB0aXRsZSBhbmQgZGVzY3JpcHRpb24gYXJlIHN1cGVyIGR1cGVyIGxvbmcgYW5kIHNob3cgd2hhdCBoYXBwZW5zIHdoZW4geW91IGV4Y2VlZCB0aGUgdGV4dCBhcmVhLiBTdXJwcmlzZSEgWW91IGNhbiBzY3JvbGwgbXkgY29udGVudC5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0zMFwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiNHRoIG5vdGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnkgdGhlIHdheSwgdGhpcyBwcm9qZWN0IHdhcyBjb2RlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IGFuZCBDU1MuXCIsXG4gICAgcHJvamVjdDogcHJvamVjdHNBcnJheVswXSxcbiAgICBkdWVkYXRlOiBcIjIwMjEtMTAtMzFcIixcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbnJlbmRlckhvbWUubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHJlbmRlclByb2plY3RJbnB1dCgpO1xufSk7XG5cbnNhdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNhdmVQcm9qZWN0KCk7XG59KTtcblxucmVuZGVySG9tZS5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0XCIpO1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkbmV3XCIpO1xuICByZW5kZXJOb3RlUG9wdXAoKTtcbn0pO1xuXG5ub3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0XCIpKSB7XG4gICAgc2F2ZU5vdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBzYXZlTm90ZShhY3RpdmVOb3RlSW5kZXgpO1xuICB9XG59KTtcblxucmVuZGVySG9tZS5ob21lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAhZS50YXJnZXQuY2xvc2VzdChcIi5wb3B1cGNvbnRhaW5lclwiKSAmJlxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmV3bm90ZWJ1dHRvblwiKSAmJlxuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkbmV3XCIpXG4gICAgKSB7XG4gICAgICBjbG9zZU5vdGVQb3B1cCgpO1xuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFkZG5ld1wiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSAmJlxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIucG9wdXBjb250YWluZXJcIikgJiZcbiAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiLm5ld25vdGVidXR0b25cIilcbiAgICApIHtcbiAgICAgIGNsb3NlTm90ZVBvcHVwKCk7XG4gICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdFwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIuc2F2ZXByb2plY3RidG5cIikgJiZcbiAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RpbnB1dFwiKSAmJlxuICAgICAgcHJvamVjdElucHV0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGNsb3NlUHJvamVjdElucHV0KCk7XG4gICAgfVxuICB9LFxuICB0cnVlXG4pO1xuXG5jb25zdCBzYXZlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgc2V0VGltZW91dCgoKSA9PiBjbG9zZVByb2plY3RJbnB1dCgpLCAzMDApO1xufTtcblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0LCBpbmRleCk7XG4gIH0pO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn07XG5cbmxldCBwcm9qZWN0RGl2QXJyYXkgPSBbXTtcbmNvbnN0IHJlbmRlclByb2plY3QgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdHNBcnJheVtpbmRleF07XG4gIHJlbmRlckhvbWUucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIHByb2plY3REaXZBcnJheS5wdXNoKHByb2plY3QpO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdERpdkFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZXByb2plY3RcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlcHJvamVjdFwiKTtcbiAgICBjb25zdCBzb3J0ZWROb3RlQXJyYXkgPSBteU5vdGVBcnJheS5maWx0ZXIoKG5vdGUpID0+IHtcbiAgICAgIGlmIChub3RlLnByb2plY3QgPT09IHByb2plY3RzQXJyYXlbaW5kZXhdKSByZXR1cm4gbm90ZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWROb3RlQXJyYXkpO1xuICAgIHBvcHVsYXRlQm9hcmQoc29ydGVkTm90ZUFycmF5KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RPcHRpb25zID0gKCkgPT4ge1xuICBjbGVhclByb2plY3RPcHRpb25zKCk7XG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3QpO1xuICB9KTtcbn07XG5cbmxldCBub3RlSWQgPSA0O1xuY29uc3Qgc2F2ZU5vdGUgPSAobm90ZU51bWJlcikgPT4ge1xuICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGV0aXRsZVwiKTtcbiAgY29uc3Qgbm90ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IG5vdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZVwiKTtcbiAgY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcbiAgY29uc3QgdG9kb05vdGUgPSBuZXcgTm90ZShcbiAgICBub3RlVGl0bGUudmFsdWUsXG4gICAgbm90ZURlc2NyaXB0aW9uLnZhbHVlLFxuICAgIG5vdGVQcm9qZWN0LnZhbHVlLFxuICAgIG5vdGVEdWVEYXRlLnZhbHVlLFxuICAgIG5vdGVQcmlvcml0eS52YWx1ZVxuICApO1xuICBpZiAocG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSkge1xuICAgIHRvZG9Ob3RlLmlkID0gbm90ZU51bWJlcjtcbiAgICBsZXQgbm90ZUluZGV4ID0gbXlOb3RlQXJyYXlcbiAgICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vdGUuaWQ7XG4gICAgICB9KVxuICAgICAgLmluZGV4T2Yobm90ZU51bWJlcik7XG4gICAgbXlOb3RlQXJyYXkuc3BsaWNlKG5vdGVJbmRleCwgMSwgdG9kb05vdGUpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlTm90ZVBvcHVwKCksIDMwMCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kb05vdGUuaWQgPSBub3RlSWQ7XG4gICAgbXlOb3RlQXJyYXkucHVzaCh0b2RvTm90ZSk7XG4gICAgbm90ZUlkKys7XG4gIH1cbiAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgc2V0VGltZW91dCgoKSA9PiBjbG9zZU5vdGVQb3B1cCgpLCAzMDApO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBzaG93UHJvamVjdElucHV0KCk7XG4gIHJlbmRlckhvbWUucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Rm9ybSk7XG59O1xuXG5jb25zdCBjbG9zZVByb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgcHJvamVjdElucHV0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHByb2plY3RJbnB1dEZvcm0ucmVtb3ZlKCk7XG59O1xuXG5jb25zdCByZW5kZXJOb3RlUG9wdXAgPSAoKSA9PiB7XG4gIGJ1aWxkTm90ZVBvcHVwKCk7XG4gIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMC4zXCI7XG4gIHJlbmRlckhvbWUubWFpbi5pbnNlcnRCZWZvcmUocG9wdXBDb250YWluZXIsIHJlbmRlckhvbWUubWFpbi5jaGlsZE5vZGVzWzFdKTtcbiAgcG9wdWxhdGVQcm9qZWN0T3B0aW9ucygpO1xufTtcblxuY29uc3QgY2xvc2VOb3RlUG9wdXAgPSAoKSA9PiB7XG4gIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMS4wXCI7XG4gIG5vdGVGb3JtLnJlc2V0KCk7XG4gIHBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xufTtcblxubGV0IGFjdGl2ZU5vdGVJbmRleDtcblxuY29uc3QgcG9wdWxhdGVCb2FyZCA9IChub3RlQXJyYXkpID0+IHtcbiAgLy8hIGNhbiBzb21lIG9mIHRoaXMgRE9NIHN0dWZmIGJlIHdyaXR0ZW4gYXMgYSBmdW5jdGlvbiBpbiBhIG1vZHVsZT9cbiAgY2xlYXJCb2FyZCgpO1xuICBub3RlQXJyYXkuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgIGNvbnN0IGJsYW5rTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxhbmtOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuXG4gICAgYmxhbmtOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICAgIGVkaXROb3RlKG5vdGUuaWQpO1xuICAgICAgYWN0aXZlTm90ZUluZGV4ID0gbm90ZS5pZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZWRpdnRpdGxlXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICAgIGJsYW5rTm90ZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJub3RlZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmRlc2NyaXB0aW9uO1xuICAgIGJsYW5rTm90ZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG5vdGUucHJvamVjdDtcbiAgICBwcm9qZWN0LnRpdGxlID0gXCJQcm9qZWN0XCI7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibm90ZWRpdnByb2plY3RcIik7XG4gICAgYmxhbmtOb3RlLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVkaXZkdWVkYXRlXCIpO1xuICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBub3RlLmR1ZWRhdGU7XG4gICAgZHVlZGF0ZS50aXRsZSA9IFwiRHVlIERhdGVcIjtcbiAgICBibGFua05vdGUuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJub3RlZGl2cHJpb3JpdHlcIik7XG4gICAgYmxhbmtOb3RlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eVZhbHVlLnRleHRDb250ZW50ID0gbm90ZS5wcmlvcml0eTtcbiAgICBwcmlvcml0eVZhbHVlLnRpdGxlID0gXCJQcmlvcml0eVwiO1xuICAgIHN3aXRjaCAobm90ZS5wcmlvcml0eSkge1xuICAgICAgY2FzZSBcIkhpZ2hcIjpcbiAgICAgICAgcHJpb3JpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgIHByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgIHByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5VmFsdWUpO1xuICAgIGNvbnN0IHRyYXNoSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHJhc2hJY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0cmFzaGljb25kaXZcIik7XG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiKTtcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuICAgIHRyYXNoSWNvbkRpdi5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHRyYXNoSWNvbkRpdik7XG5cbiAgICB0cmFzaEljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZGVsZXRlTm90ZShub3RlLmlkKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxhbmtOb3RlKTtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVOb3RlID0gKGlkKSA9PiB7XG4gIGxldCBub3RlSW5kZXggPSBteU5vdGVBcnJheVxuICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgIHJldHVybiBub3RlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YoaWQpO1xuICBteU5vdGVBcnJheS5zcGxpY2Uobm90ZUluZGV4LCAxKTtcbiAgYWRkVG9TdG9yYWdlKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgfSwgMjAwKTtcbn07XG5cbmNvbnN0IGVkaXROb3RlID0gKGlkKSA9PiB7XG4gIGxldCBub3RlSW5kZXggPSBteU5vdGVBcnJheVxuICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgIHJldHVybiBub3RlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YoaWQpO1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgcmVuZGVyTm90ZVBvcHVwKCk7XG4gIGlucHV0VGl0bGUudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLnRpdGxlO1xuICBpbnB1dERlc2NyaXAudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0LnZhbHVlID0gbXlOb3RlQXJyYXlbbm90ZUluZGV4XS5wcm9qZWN0O1xuICBpbnB1dER1ZURhdGUudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLmR1ZWRhdGU7XG4gIHNlbGVjdFByaW9yaXR5LnZhbHVlID0gbXlOb3RlQXJyYXlbbm90ZUluZGV4XS5wcmlvcml0eTtcbn07XG5cbmNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gIHdoaWxlIChyZW5kZXJIb21lLm5vdGVzQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIucmVtb3ZlQ2hpbGQocmVuZGVySG9tZS5ub3Rlc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufTtcblxucmVuZGVySG9tZS5hcHBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVCb2FyZChteU5vdGVBcnJheSk7XG4gIH0sIDMwMCk7XG59KTtcblxuY29uc3QgYWRkVG9TdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVzXCIsIEpTT04uc3RyaW5naWZ5KG15Tm90ZUFycmF5KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gIG15Tm90ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpKTtcbiAgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG59O1xuXG4vLyBJZiBsb2NhbCBzdG9yYWdlIGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgaXQsIG90aGVyd2lzZSBnZXQgbm90ZXMgZnJvbSBsb2NhbCBzdG9yYWdlXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgYWRkVG9TdG9yYWdlKCk7XG59IGVsc2Uge1xuICBnZXRGcm9tU3RvcmFnZSgpO1xufVxuXG5wb3B1bGF0ZVByb2plY3RzKCk7XG5wb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==