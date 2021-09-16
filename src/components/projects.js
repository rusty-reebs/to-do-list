// projects.js

//TODO append input box at bottom of projects list. Save input to projects array. Add input selection to notepopup with projects in list.

const projects = [];

const addProject = () => {
  showProjectInput();
};

const projectInputForm = document.createElement("form");
const projectInput = document.createElement("input");
projectInput.classList.add("projectinput");
projectInput.type = "text";
projectInput.name = "project";
projectInput.placeholder = "New project name";
const projectSaveCancelDiv = document.createElement("div");
projectSaveCancelDiv.classList.add("savecancel");
const projectSaveDiv = document.createElement("div");
projectSaveDiv.classList.add("saveproject");
const save = document.createElement("i");
save.classList.add("fas");
save.classList.add("fa-check-square");
const projectCancelDiv = document.createElement("div");
projectCancelDiv.classList.add("cancelproject");
const cancel = document.createElement("i");
cancel.classList.add("fas");
cancel.classList.add("fa-window-close");

const showProjectInput = () => {
  projectInputForm.appendChild(projectInput);
  projectInputForm.appendChild(projectSaveCancelDiv);
  projectSaveCancelDiv.appendChild(projectSaveDiv);
  projectSaveCancelDiv.appendChild(projectCancelDiv);
  projectSaveDiv.appendChild(save);
  projectCancelDiv.appendChild(cancel);
};

export { projectInputForm };
export { showProjectInput };
