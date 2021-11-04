// home.js renders the sidebar and main container

export { renderHome };

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

  // const exampleProject = document.createElement("div");
  // exampleProject.classList.add("project");
  // exampleProject.innerHTML = "Sample To-Dos";
  // projectsDiv.appendChild(exampleProject);

  // const exampleProject2 = document.createElement("div");
  // exampleProject2.classList.add("project");
  // exampleProject2.innerHTML = "Household";
  // projectsDiv.appendChild(exampleProject2);

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

export { clearProjects };
