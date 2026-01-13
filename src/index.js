import {
  addProject,
  selectProject,
  editProject,
  listProjects,
  removeProject,
} from "./projectsManager.js";

import {
  addTask,
  editTask,
  listTasks,
  removeTask,
} from "./tasksManager.js";

import { createTask } from "./task.js";

// Prompt user repeatedly until they exit
while (true) {
  let input = prompt("input:");

  // Break out of the loop if the user exits
  if (input === "exit") break;

  // Add a new project or task
  if (input === "add") {
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

  // Select a project by index
  if (input === "select") {
    const index = Number(prompt("what to select?")) - 1;
    selectProject(index);
  }

  // Select and edit a project or task
  if (input === "edit") {
    const toEdit = prompt("what to edit?");

    if (toEdit === "project") {
      const keyValuePair = prompt("enter what to edit (key=value):").split("=");
      editProject(keyValuePair[0], keyValuePair[1]);
    }

    if (toEdit === "task") {
      const index = Number(prompt("which task to edit?"));
      const keyValuePair = prompt("enter what to edit (key=value):").split("=");
      editTask(index, keyValuePair[0], keyValuePair[1]);
    }
  }

  // Listing projects or tasks
  if (input === "list") {
    const toList = prompt("what to list?");

    if (toList === "project") listProjects();
    if (toList === "task") listTasks();
  }

  // Remove a project or task by index
  if (input === "remove") {
    const toRemove = prompt("what to remove?");
    const index = Number(prompt(`which ${toRemove} to remove?`)) - 1;

    if (toRemove === "task") removeTask(index);
    if (toRemove === "project") removeProject(index);
  }
}
