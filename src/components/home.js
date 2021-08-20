// home.js renders the sidebar and main container

//! Separate DOM stuff from application logic, keep in separate modules

const renderHome = () => {
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

    const exampleNote = document.createElement("div");
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

    const exampleNote5 = document.createElement("div");
    exampleNote5.classList.add("note");
    exampleNote5.innerHTML = "This is another note";
    notesContainer.appendChild(exampleNote5);
}

export { renderHome };
