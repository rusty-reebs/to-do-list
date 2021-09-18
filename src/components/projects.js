// projects.js

//TODO append input box at bottom of projects list. Save input to projects array. Add input selection to notepopup with projects in list.

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

export { projectInputForm, saveProjectButton };
export { showProjectInput };
