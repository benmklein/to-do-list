import './styles.scss'
import { makeProject, makeTask, projectsList } from './projects'
import { displayProjects, displayTask, selectedProject, selectProject} from './display'
import './favicon-32x32.png';

const task = makeTask('Test Project', 'This is a test.', '3/11/2023', 3)

displayTask(task)

// Tasks
window.onClickAddTask = () => {
    window.onClickCancelProjectForm()
    const form = document.querySelector('form.task-create') as HTMLFormElement
    form.setAttribute('style', 'display: block')
    form.reset()
}

window.onClickCancelTaskForm = () => {
    const form = document.querySelector('form.task-create') as HTMLFormElement
    form.setAttribute('style', 'display: none')
    form.reset()
}
window.onClickCreateTask = () => {
    const formData = new FormData(document.querySelector('form.task-create'))
    const newTask = makeTask(formData.get('title').toString(),
                             formData.get('desc').toString(),
                             formData.get('duedate').toString(),
                             +formData.get('priority'))
    projectsList[selectedProject].tasks.push(newTask)
    displayProjects()
    selectProject(projectsList, selectedProject)
    window.localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

// Projects
window.onClickAddProject = () => {
    window.onClickCancelTaskForm()
    const form = document.querySelector('form.project-create') as HTMLFormElement
    form.setAttribute('style', 'display: block')
    form.reset()
}

window.onClickCancelProjectForm = () => {
    const form = document.querySelector('form.project-create') as HTMLFormElement
    form.setAttribute('style', 'display: none')
    form.reset()
}

window.onClickCreateProject = () => {
    const formData = new FormData(document.querySelector('form.project-create'))
    const newProject = makeProject(formData.get('title').toString())
    projectsList.push(newProject)
    displayProjects()
    window.localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

window.deleteSelectedProject = () => {
    projectsList.splice(selectedProject, 1)
    window.localStorage.setItem("projectsList", JSON.stringify(projectsList));
    displayProjects()
    document.querySelector('.content').innerHTML = ''
    window.onClickCancelProjectForm()
    window.onClickCancelTaskForm()
}
