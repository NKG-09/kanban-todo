// Generate task object with default values or custom input and return it

// Due date is stored as a string
// Possible values for priority are "low", "normal", and "high"
// Possible states of a task are "do", "doing", "done"

export function createTask (title = "Blank Task", subtitle = "", dueDate = "", notes = [], priority = "normal", state = "do") {
  return {
    title,
    subtitle,
    dueDate,
    notes,
    priority,
    state,
  };
}
