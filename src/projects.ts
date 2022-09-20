export {makeTask, makeProject, projectsList}

let projectsList: Project[] = [
    {
      title: "Project",
      tasks: [
        makeTask("Test Task", "This is a test.", "3/11/2023", 3),
        makeTask("Test Task2", "This is a test.", "3/11/2023", 3),
      ],
    },
  ];

function makeProject(title:string):Project{
    return {title, tasks:[]}
}

function makeTask(title:string, description:string, due:string, priority:number):Task{
    return {title, description, due, priority, completed: false}
}

function storageAvailable(type: string) {
    let storage;
    try {
        storage = window[+type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function checkStorage() {
    if (storageAvailable('localStorage')) {
        projectsList = JSON.parse(localStorage.getItem('projectsList')) || []
        localStorage.setItem
      }
      else {
        // Too bad, no localStorage for us
      }
}

checkStorage()