import { createProject } from "./project";

// Load projects map and the current active project from localStorage
const projects = new Map(JSON.parse(localStorage.getItem("projects"))) ?? new Map();
let activeProject = localStorage.getItem("activeProject");

saveData();

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

// Get the currently selected project
export function selectedProject() {
  return projects.get(activeProject);
}

// Edit a project's details with a key = value pair
export function editProject(key, value, project = selectedProject()) {
  project[key] = value;
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

// Remove a project with its key
export function removeProject(project = activeProject) {
  // If an index number is given instead of a key, select the key with that index
  if (typeof project === "number") project = [...projects.keys()][project];

  projects.delete(project);
  if (project === activeProject) selectProject(0);
  saveData();
}

export function saveData() {
  // Add a project and select it if there are no existing projects
  if (projects.size === 0) addProject();

  // Save all data to localStorage
  localStorage.setItem("projects", JSON.stringify(Array.from(projects.entries())));
  localStorage.setItem("activeProject", activeProject);
}
