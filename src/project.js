export function createProject (name = "New Project", tasks = []) {
  return {
    name,
    tasks,
  };
}

export function addTask(project, task) {
  project.tasks.push(task);
}
