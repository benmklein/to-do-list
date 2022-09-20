import { makeTask, projectsList } from "./projects";

export { displayTask, displayProjects, selectedProject, selectProject };

let selectedProject = 0;

// displays a task in the content area of the DOM
function displayTask(task: Task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskTitle = document.createElement("h1");
  taskTitle.innerText = task.title;

  const taskDesc = document.createElement("p");
  taskDesc.innerText = task.description;

  const dueDate = document.createElement("p");
  dueDate.innerText = `due on: ${task.due}`;

  let color = `priority${task.priority}`;

  taskTitle.classList.add(color);

  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDesc);
  taskDiv.appendChild(dueDate);
  document.querySelector(".content").appendChild(taskDiv);
}

//togglable button to view a project's tasks on sidebar
window.expandProject = (event: Event) => {
  const projectTitle = event.target as HTMLElement;
  const projectID = +projectTitle.getAttribute("data-id");
  const parentDiv = projectTitle.parentElement;
  const project = projectsList[projectID];

  // if not expanded, show task titles in project
  if (projectTitle.classList.contains("unexpanded")) {
    for (const task of project.tasks) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-name");
      taskItem.innerText = task.title;
      parentDiv.appendChild(taskItem);
    }
    projectTitle.classList.add("expanded");
    projectTitle.classList.remove("unexpanded");
  }
  // else remove task titles from dom
  else {
    while (parentDiv.children.length > 1) {
      parentDiv.removeChild(parentDiv.lastChild);
    }
    projectTitle.classList.add("unexpanded");
    projectTitle.classList.remove("expanded");
  }
  selectProject(projectsList, projectID);
};

// displays all projects in the sidebar
function displayProjects() {
  document.querySelector(".projects").innerHTML = "";
  const sidebar = document.querySelector(".projects");
  for (let i = 0; i < projectsList.length; i++) {
    sidebar.innerHTML += `<ul>
    <li class="project-name unexpanded" onclick="expandProject(event)" data-id="${i}">
    ${projectsList[i].title}
    </li>
    </ul>`;
  }
}

function selectProject(projectList: Project[], index: number) {
  const project = projectList[index];
  selectedProject = index;
  document.querySelector(".content").innerHTML = "";
  for (const task of project.tasks) {
    displayTask(task);
  }
  document.querySelector(
    ".content"
  ).innerHTML += `<button onclick="onClickAddTask()">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  </svg>
</button>`;
}

displayProjects();
