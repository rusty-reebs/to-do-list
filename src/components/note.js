// note.js manipulates the DOM to build a note

const buildNote = () => {
  const blankNote = document.createElement("div");
  //? set data-id here?
  blankNote.setAttribute("data-note-identifier", noteIdentifierCount);
  blankNote.classList.add("note");
  // console.log(blankNote.getAttribute("data-note-identifier"));
  // console.log(index);

  const title = document.createElement("div");
  title.classList.add("notedivtitle");
  title.classList.add("scroll");
  title.textContent = note.title;

  const description = document.createElement("div");
  description.classList.add("notediv");
  description.classList.add("scroll");
  description.textContent = note.description;

  const duedate = document.createElement("div");
  duedate.classList.add("notedivduedate");
  // duedate.textContent = "Due Date: " + note.duedate;

  const duedateLabel = document.createElement("div");
  duedateLabel.textContent = "Due Date:";

  const duedateDate = document.createElement("div");
  duedateDate.textContent = note.duedate;

  const priority = document.createElement("div");
  priority.classList.add("notedivpriority");
  // priority.textContent = "Priority: " + note.priority;

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

  const trashIconDiv = document.createElement("div");
  trashIconDiv.classList.add("trashicondiv");

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa");
  trashIcon.classList.add("fa-trash");

  // renderHome.notesContainer.appendChild(blankNote);
  // addToStorage();

  blankNote.appendChild(title);
  blankNote.appendChild(description);
  blankNote.appendChild(duedate);
  // duedate.appendChild(duedateLabel);
  duedate.appendChild(duedateDate);
  blankNote.appendChild(priority);
  // priority.appendChild(priorityLabel);
  priority.appendChild(priorityValue);
  priority.appendChild(trashIconDiv);
  trashIconDiv.appendChild(trashIcon);
};
// blankNote.addEventListener("click", () => {
//     popupContainer.classList.add("edit");
//     console.log(popupContainer.classList);
//     // let noteNumber = index;
//     // let notenumber = blankNote.getAttribute("data-note-identifier"); //? maybe don't need data-note-idenitifer
//     // console.log(blankNote.getAttribute("data-note-identifier"));
//     console.log("Array position", noteNumber);
//     console.log("You clicked a blankNote");
//     editNote(noteNumber);
// });

// trashIconDiv.addEventListener("click", (e) => {
//     e.stopImmediatePropagation();
//     console.log("TRASH CAN!", noteNumber);
//     deleteNote(noteNumber);
// });
