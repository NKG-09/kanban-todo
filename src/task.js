export function createTask (title = "Blank Task", subtitle = "", dueDate = "", notes = [], priority = "normal", state = "todo") {
  return {
    title,
    subtitle,
    dueDate,
    notes,
    priority,
    state,
  };
}
