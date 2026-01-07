import { listProjects, addProject, addTask } from "./projectsManager.js";
import { createTask } from "./task.js";

while (true) {
  let input = prompt("input:");
  if (!input) continue;
  if (input === "exit") break;
  else if (input === "list") listProjects();
  else if (input.slice(0, 12) === "add project " && input.length > 12) {
    addProject(input.split(" ")[2]);
  }
  else if (input.slice(0, 9) === "add task " && input.length > 9) {
    const details = input.split(" ").slice(2);
    addTask(createTask(
      details[0],
      details[1],
      details[2],
    ));
  }
}
