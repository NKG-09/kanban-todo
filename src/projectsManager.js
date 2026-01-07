import { createProject } from "./project.js";

const projects = JSON.parse(localStorage.getItem("projects")) ?? [createProject()];
let projectIndex = 0;

export function addProject(name, tasks) {
  const project = createProject(name, tasks);
  projects.push(project);
  selectProject(project);
  return project;
}

export function addTask(task, project = activeProject()) {
 project.tasks.push(task);
}

export function selectProject(project) {
  projectIndex = projects.indexOf(project);
}

export function removeProject(project) {
  projects.splice(projects.indexOf(project), 1);
}

export function activeProject() {
  return projects[projectIndex];
}

export function listProjects() {
  const projectNames = projects.map(project =>
    project === projects[projectIndex]
    ? `Active: ${project.name}`
    : `${project.name}`
  ).join('\n');
  console.log(projectNames);
}
