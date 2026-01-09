import { listProjects, addProject, addTask, listTasks, selectProject, editProject, editTask } from "./projectsManager.js";
import { createTask } from "./task.js";

while (true) {
  let input = prompt("input:");
  if (!input) continue;

  if (input === "exit") break;
  else if (input === "add") {
    const toAdd = prompt("what to add?");
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
  else if (input === "list") {
    const toList = prompt("what to list?");
    if (toList === "project") listProjects();
    if (toList === "task") listTasks();
  }
  else if (input === "select") {
    const toSelect = Number(prompt("what to select?"));
    selectProject(toSelect - 1);
  }
  else if (input === "edit") {
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
