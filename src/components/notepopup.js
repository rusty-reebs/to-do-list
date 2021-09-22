// notepopup.js manipulates the DOM to build note popup box for input/edit

export {
  popupContainer,
  noteForm,
  inputDescrip,
  inputTitle,
  inputDueDate,
  selectPriority,
};
export { buildNotePopup };

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
// need to iterate array as options
const option = document.createElement("option");
const option2 = document.createElement("option");
option.innerHTML = "Gardening";
option.value = "Gardening";
option2.innerHTML = "Home";
option2.value = "Home";

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

const buildNotePopup = () => {
  // popupContainer.classList.toggle("show");
  popupContainer.appendChild(popupBox);
  popupBox.appendChild(noteForm);

  noteForm.appendChild(inputTitle);
  noteForm.appendChild(inputDescrip);
  // noteForm.appendChild(div);
  noteForm.appendChild(labelProject);
  noteForm.appendChild(selectProject);
  selectProject.appendChild(option);
  selectProject.appendChild(option2);

  noteForm.appendChild(labelDueDate);
  noteForm.appendChild(inputDueDate);
  noteForm.appendChild(labelPriority);
  noteForm.appendChild(selectPriority);

  selectPriority.appendChild(highPri);
  selectPriority.appendChild(medPri);
  selectPriority.appendChild(lowPri);

  noteForm.appendChild(noteSubmitButton);
};
