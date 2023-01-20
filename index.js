const todos = [];

while (true) {
  const action = prompt(
    "What would you like to do? (create, read, update, delete, quit)"
  );

  if (action === "create") {
    const task = prompt("Enter a task:");
    todos.push(task);
    console.log(`Task "${task}" has been added.`);
  } else if (action === "read") {
    console.log("Your to-do list:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  } else if (action === "update") {
    const index =
      parseInt(prompt("Enter the index of the task you want to update:")) - 1;
    if (index >= 0 && index < todos.length) {
      const newTask = prompt("Enter the new task:");
      todos[index] = newTask;
      console.log(`Task "${todos[index]}" has been updated.`);
    } else {
      console.log("Invalid index.");
    }
  } else if (action === "delete") {
    const index =
      parseInt(prompt("Enter the index of the task you want to delete:")) - 1;
    if (index >= 0 && index < todos.length) {
      console.log(`Task "${todos[index]}" has been deleted.`);
      todos.splice(index, 1);
    } else {
      console.log("Invalid index.");
    }
  } else if (action === "quit") {
    console.log("Goodbye!");
    break;
  } else {
    console.log("Invalid action.");
  }
}
