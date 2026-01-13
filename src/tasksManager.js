import { selectedProject, saveData } from "./projectsManager.js";

// Add a task to a specified project
export function addTask(task, project = selectedProject()) {
  project.tasks.push(task);
  saveData();
}

// Edit a task by index
export function editTask(index, key, value, project = selectedProject()) {
  project.tasks[index][key] = value;
  saveData();
}

// List all tasks and their content
export function listTasks(project = selectedProject()) {
  const output = project.tasks.map((task) =>
    Object.keys(task).map(key => `${key}: ${task[key]}`).join("\n")
  ).join("\n");

  console.log(output);
}

// Remove a task by index
export function removeTask(index, project = selectedProject()) {
  project.tasks.splice(index, 1);
  saveData();
}
