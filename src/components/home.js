// home.js renders the sidebar and main container

//! Separate DOM stuff from application logic, keep in separate modules

// import { saveNote } from "../index.js";

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

  const exampleNote = document.createElement("div"); //? function to create notes?
  exampleNote.classList.add("note");
  exampleNote.innerHTML = "This is a note";
  notesContainer.appendChild(exampleNote);

  const exampleNote2 = document.createElement("div");
  exampleNote2.classList.add("note");
  exampleNote2.innerHTML = "This is another note";
  notesContainer.appendChild(exampleNote2);

  const exampleNote3 = document.createElement("div");
  exampleNote3.classList.add("note");
  exampleNote3.innerHTML = "This is another note";
  notesContainer.appendChild(exampleNote3);

  const exampleNote4 = document.createElement("div");
  exampleNote4.classList.add("note");
  exampleNote4.innerHTML = "This is another note";
  notesContainer.appendChild(exampleNote4);

  // const exampleNote5 = document.createElement("div");
  // exampleNote5.classList.add("note");
  // exampleNote5.innerHTML = "This is another note";
  // notesContainer.appendChild(exampleNote5);

  return { main, notesContainer, newNoteButton };
})();

export { renderHome };

const popupContainer = document.createElement("div");
const noteForm = document.createElement("form");
const inputTitle = document.createElement("input");
const inputDescrip = document.createElement("textarea");
const inputDueDate = document.createElement("input");

export { popupContainer, noteForm };

const notePopup = () => {
  renderHome.notesContainer.style.opacity = "0.3"; // fades background
  // const popupContainer = document.createElement("div");
  popupContainer.classList.add("popupcontainer");
  // popupContainer.style.display = "flex"; //!
  // renderHome.main.appendChild(popupContainer);
  renderHome.main.insertBefore(popupContainer, renderHome.main.childNodes[1]);

  const popupBox = document.createElement("div");
  popupBox.classList.add("popupbox");
  popupContainer.appendChild(popupBox);

  // const noteForm = document.createElement("form");
  noteForm.classList.add("noteform");
  noteForm.id = "noteform";
  popupBox.appendChild(noteForm);

  const div = document.createElement("div");

  // const inputTitle = document.createElement("input");
  inputTitle.classList.add("notetitle");
  inputTitle.type = "text";
  inputTitle.name = "title";
  inputTitle.id = "notetitle";
  inputTitle.placeholder = "Title";

  // const inputDescrip = document.createElement("textarea");
  inputDescrip.classList.add("description");
  inputDescrip.name = "description";
  inputDescrip.id = "notedescription";
  inputDescrip.placeholder = "Take a note...";

  const labelDueDate = document.createElement("label");
  labelDueDate.classList.add("duedate");
  labelDueDate.for = "duedate";
  labelDueDate.innerHTML = "Due Date:";

  // const inputDueDate = document.createElement("input");
  inputDueDate.classList.add("duedatecal");
  inputDueDate.type = "date";
  inputDueDate.name = "duedate";
  inputDueDate.id = "duedate";

  const labelPriority = document.createElement("label");
  labelPriority.classList.add("prioritylabel");
  labelPriority.for = "priority";
  labelPriority.innerHTML = "Priority:";

  const selectPriority = document.createElement("select");
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

  noteForm.appendChild(inputTitle);
  noteForm.appendChild(inputDescrip);
  noteForm.appendChild(div);
  noteForm.appendChild(labelDueDate);
  noteForm.appendChild(inputDueDate);
  noteForm.appendChild(labelPriority);
  noteForm.appendChild(selectPriority);
  selectPriority.appendChild(highPri);
  selectPriority.appendChild(medPri);
  selectPriority.appendChild(lowPri);
  noteForm.appendChild(noteSubmitButton);

  // noteForm.addEventListener("submit", (e) => {
  //   e.preventDefault(); // stops refresh on submit
  //   saveNote();
  //   console.log("saved!");
  // });

  // return { popupContainer, noteForm, inputTitle, inputDescrip };
};

export { notePopup };

const closeNotePopup = () => {
  // renderHome.main.removeChild(popupContainer);
  // popupContainer.remove();
  console.log(popupContainer.style.display);
  // popupContainer.style.display = "none";
  console.log(popupContainer.style.display);
  // inputTitle.value = ""; //? can use .reset method?
  // inputDescrip.value = "";
  noteForm.reset();
  console.log("I'm closing!");
};

export { closeNotePopup };

// Possible radio buttons for priority inputs

// const labelPriorityHigh = document.createElement("label");
// labelPriorityHigh.for = "priorityhigh";
// labelPriorityHigh.innerHTML = "High";

// const labelPriorityMed = document.createElement("label");
// labelPriorityMed.for = "prioritymed";
// labelPriorityMed.innerHTML = "Medium";

// const labelPriorityLow = document.createElement("label");
// labelPriorityLow.for = "prioritylow";
// labelPriorityLow.innerHTML = "Low";

// const inputPriorityHigh = document.createElement("input");
// inputPriorityHigh.type = "radio";
// inputPriorityHigh.name = "priority";
// inputPriorityHigh.id = "priorityhigh";
// inputPriorityHigh.value = "High";

// const inputPriorityMed = document.createElement("input");
// inputPriorityMed.type = "radio";
// inputPriorityMed.name = "priority";
// inputPriorityMed.id = "prioritymed";
// inputPriorityMed.value = "Medium";

// const inputPriorityLow = document.createElement("input");
// inputPriorityLow.type = "radio";
// inputPriorityLow.name = "priority";
// inputPriorityLow.id = "prioritylow";
// inputPriorityLow.value = "Low";

// noteForm.appendChild(inputPriorityHigh);
// noteForm.appendChild(labelPriorityHigh);
// noteForm.appendChild(inputPriorityMed);
// noteForm.appendChild(labelPriorityMed);
// noteForm.appendChild(inputPriorityLow);
// noteForm.appendChild(labelPriorityLow);
