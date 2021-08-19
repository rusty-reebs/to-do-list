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

    const newNoteButton = document.createElement("button");
    newNoteButton.classList.add("newnotebutton");
    newNoteButton.innerHTML = "New To-Do Note";
    main.appendChild(newNoteButton);
    
}

export { renderHome };
