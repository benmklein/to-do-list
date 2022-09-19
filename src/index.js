import './styles.scss'
import { makeProject, makeTask } from './projects'
import { displayTask} from './display'
import './favicon-32x32.png';

console.log('It\'s working.');

const task = makeTask('Test Project', 'This is a test project.', '3/11/2023', 3)

displayTask(task)

window.onClickAddTask = () => {
    const form = document.querySelector('form')
    form.style = 'display: block'
    form.reset()
}

window.onClickCancelForm = () => {
    const form = document.querySelector('form')
    form.style = 'display: none'
    form.reset()
}

window.onClickCreateTask = () => {
    const form = document.querySelector('form')
    const formData = new FormData(document.querySelector('form'))
    const newTask = makeTask(formData.get('title'), formData.get('desc'), formData.get('duedate'), formData.get('priority'))
    displayTask(newTask)
}