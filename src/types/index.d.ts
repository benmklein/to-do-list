export {};

declare global {
  interface Window {
    onClickAddTask: () => void;
    onClickCancelTaskForm: () => void;
    onClickCreateTask: () => void;
    onClickCancelProjectForm: () => void;
    onClickCreateProject: () => void;
    onClickAddProject: () => void;
    expandProject: (event:Event) => void;
    deleteSelectedProject: () => void;
    setItem: (key: string, value: string) => void;
    removeItem:(key:string) => void;
  }
  interface Task {
    title: string;
    description: string;
    due: string;
    priority: number;
    completed: boolean;
  }
  interface Project {
    title: string;
    tasks: Task[];
  }
}
