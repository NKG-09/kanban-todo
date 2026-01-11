import { createProject } from "./project";

// Load projects array and the current active project from localStorage
const projects = new Map(JSON.parse(localStorage.getItem("projects"))) ?? new Map();
let activeProject = localStorage.getItem("activeProject");

// TODO Projects not loading from memory

saveData();

function saveData() {
  // Add a project and select it if there are no existing projects
  if (projects.size === 0) addProject();

  // Save all data to localStorage
  localStorage.setItem("projects", JSON.stringify(Array.from(projects.entries())));
  localStorage.setItem("activeProject", activeProject);
}

export function addProject(name, tasks) {
  // Generate a random key and project from the given data
  const key = Math.random().toString();
  const project = createProject(name, tasks);

  // Add the project to the map with the key and select it
  projects.set(key, project);
  selectProject(key);

  saveData();
  return project;
}

// Select a project from an index or key
export function selectProject(key) {
  // All keys of the projects
  const keys = [...projects.keys()];

  // If an index number is given instead of a key, select the key with that index
  if (typeof key === "number") key = keys[key];

  // If the key we have is invalid, set the key to the first key
  if (!key || !keys.includes(key)) key = keys[0];

  activeProject = key;
  saveData();
}

// Edit a project's details with a key = value pair
export function editProject(key, value, project = proj205835ects.get(activeProject)) {
  project[key] = value;
  saveData();
}

// Remove a project with its key
export function removeProject(project = activeProject) {
  projects.delete(project);
  saveData();
}

// List all projects and mark the one that's active
export function listProjects() {
  // Loop through the keys of each project
  const projectNames = [...projects.keys()].map((key, i) =>
    key === activeProject
      ? `ACTIVE ${i + 1}: ${projects.get(key).name}`
      : `------ ${i + 1}: ${projects.get(key).name}`
  ).join("\n");

  console.log(projectNames);
}

// Add a task to a specified project
export function addTask(task, project = projects.get(activeProject)) {
  project.tasks.push(task);
  saveData();
}

// Edit a task based on its index
export function editTask(taskIndex, key, value, project = projects.get(activeProject)) {
  project.tasks[taskIndex][key] = value;
  saveData();
}

// List all tasks and their content
export function listTasks(project = projects.get(activeProject)) {
  const output = project.tasks.map((task) =>
    Object.keys(task).map(key => `${key}: ${task[key]}`).join("\n")
  ).join("\n");

  console.log(output);
}
