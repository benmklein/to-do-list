export { displayTask };

function displayTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskTitle = document.createElement("h1");
  taskTitle.innerText = task.title;

  const taskDesc = document.createElement("p");
  taskDesc.innerText = task.description;

  const dueDate = document.createElement("p");
  dueDate.innerText = task.due;

  let color = `priority${task.priority}`

  
  taskTitle.classList.add(color)
  
  taskDiv.appendChild(taskTitle)
  taskDiv.appendChild(taskDesc)
  taskDiv.appendChild(dueDate)
  document.querySelector('.content').appendChild(taskDiv)
}

function expandProject(project) {
  
}