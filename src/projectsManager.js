import { createProject } from "./project.js";


const projects = JSON.parse(localStorage.getItem("projects")) ?? [createProject()];
let activeProject = 0;

export function addProject(name, tasks) {
  createProject(name, tasks);
}

export function listProjects() {
  const projectNames = projects.map(project =>
    project === projects[activeProject]
    ? `Active: ${project.name}`
    : `${project.name}`
  ).join('\n');
  console.log(projectNames);
}
