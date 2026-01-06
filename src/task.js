export function createTask (title, subtitle, dueDate, notes, priority, state = "todo") {
  return {
    title,
    subtitle,
    dueDate,
    notes,
    priority,
    state,
  };
}
