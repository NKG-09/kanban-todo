import { createProject } from "./project.js";

const projects = JSON.parse(localStorage.getItem("projects")) ?? [createProject()];
let projectIndex = 0;

export function addProject(name, tasks) {
  const project = createProject(name, tasks);
  projects.push(project);
  selectProject(projects.length - 1);
  return project;
}

export function addTask(task, project = activeProject()) {
 project.tasks.push(task);
}

export function listTasks(project = activeProject()) {
  const output = project.tasks.map((task) =>
    Object.keys(task).map(key => `${key}: ${task[key]}`).join("\n")
  ).join("\n");

  console.log(output);
}

export function selectProject(index) {
  projectIndex = index;
}

export function removeProject(project) {
  projects.splice(projects.indexOf(project), 1);
}

export function activeProject() {
  return projects[projectIndex];
}

export function listProjects() {
  const projectNames = projects.map((project, index) =>
    project === projects[projectIndex]
    ? `ACTIVE ${index + 1}: ${project.name}`
    : `------ ${index + 1}: ${project.name}`
  ).join('\n');
  console.log(projectNames);
}
