export function createProject (name = "New Project", tasks = []) {
  return {
    name,
    tasks,
  };
}
