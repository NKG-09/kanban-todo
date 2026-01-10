import { createProject } from "./project";

// Load projects array and the current active project from localStorage
const projects = JSON.parse(localStorage.getItem("projects")) ?? [];
let activeProject = Number(localStorage.getItem("activeProject")) ?? 0;

saveData();

function saveData() {
  // Add a project and select it if there are no existing projects
  if (projects.length <= 0) {
    projects.push(createProject());
    selectProject(0);
  }

  // Save all data to localStorage
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("activeProject", activeProject);
}

// Add a project to the projects array
export function addProject(name, tasks) {
  const project = createProject(name, tasks);
  projects.push(project);
  saveData();
  return project;
}

// Select a project based on an index
export function selectProject(index) {
  if (index < 0) index = 0;
  if (index > projects.length) index = projects.length - 1;
  activeProject = index;
  saveData();
}

// Edit a project's details with a key = value pair
export function editProject(key, value, project = projects[activeProject]) {
  project[key] = value;
  saveData();
}

// Remove a project from the projects array
export function removeProject(project = projects[activeProject]) {
  if (projects.includes(project)) {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
  }
  saveData();
}

// List all projects and mark the one that's active
export function listProjects() {
  const projectNames = projects.map((project, index) =>
    index === activeProject
    ? `ACTIVE ${index + 1}: ${project.name}`
    : `------ ${index + 1}: ${project.name}`
  ).join('\n');
  console.log(projectNames);
}

// Add a task to a specified project
export function addTask(task, project = projects[activeProject]) {
  project.tasks.push(task);
  saveData();
}

// Edit a task based on its index
export function editTask(taskIndex, key, value, project = projects[activeProject]) {
  project.tasks[taskIndex][key] = value;
  saveData();
}

// List all tasks and their content
export function listTasks(project = projects[activeProject]) {
  const output = project.tasks.map((task) =>
    Object.keys(task).map(key => `${key}: ${task[key]}`).join("\n")
  ).join("\n");

  console.log(output);
}
