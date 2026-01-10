// Generate project object with default values or custom input and return it

export function createProject (name = "New Project", tasks = []) {
  return {
    name,
    tasks,
  };
}
