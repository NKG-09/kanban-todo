import { listProjects, addProject, addTask, listTasks, editProject, editTask, manager, selectProject } from "./projectsManager.js";
import { createTask } from "./task.js";

// Loop prompts for input till user types exit
while (true) {
  let input = prompt("input:");

  if (input === "exit") break;
  else if (input === "add") { // Add a new project or task
    const toAdd = prompt("what to add?");
    // Prompt the user for the data of what to add and then add it
    if (toAdd === "project") addProject(
      prompt("project name:")
    );
    if (toAdd === "task") addTask(createTask(
      prompt("task title:"),
      prompt("task subtitle:"),
      prompt("task due date:"),
      prompt("task notes (separate by ',')").split(','),
      prompt("task priority:"),
      prompt("task state:"),
    ));
  }
  else if (input === "list") { // Listing projects or tasks
    const toList = prompt("what to list?");
    if (toList === "project") listProjects();
    if (toList === "task") listTasks();
  }
  else if (input === "select") { // Selecting a project based on its index
    selectProject(Number(prompt("what to select?")) - 1);
  }
  else if (input === "edit") { // Edit a project's or task's data
    const toEdit = prompt("what to edit?");
    if (toEdit === "project") {
      const keyValuePair = prompt("enter what to edit (key=value):").split("=");
      editProject(keyValuePair[0], keyValuePair[1]);
    }
    if (toEdit === "task") {
      const taskIndex = Number(prompt("which task to edit?"));
      const keyValuePair = prompt("enter what to edit (key=value):").split("=");
      editTask(taskIndex, keyValuePair[0], keyValuePair[1]);
    }
  }
}
