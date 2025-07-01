// ==============================
// TASK MANAGEMENT SYSTEM (JSL03)
// ==============================

// ✅ Existing Tasks (Predefined Board)
const tasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
  { id: 4, title: "Correct JSL02", description: "Make corrections to JSL02 before attempting JSL03", status: "done" },
  { id: 5, title: "Work on JSL03", description: "Read the project brief and user stories to understand the requirements, implement a solution", status: "todo" },
  { id: 6, title: "Revise Javascript concepts", description: "Practice JS concepts to make sure I understand the fundamentals", status: "doing" },
];

// ✅ Add up to 3 new tasks using prompts
for (let i = 0; i < 3; i++) {
  // Limit total number of tasks to 9
  if (tasks.length >= 9) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }
    // 📝 Ask user for task details
  const title = prompt(`Enter task ${i + 1} title:`);
  const description = prompt(`Enter task ${i + 1} description:`);

  // 🛡️ Validate task status input
  let status = prompt(`Enter task ${i + 1} status (todo, doing, done):`).toLowerCase();
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Enter task ${i + 1} status (todo, doing, done):`).toLowerCase();
  }
    // 🆔 Generate new task with unique ID
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    title,
    description,
    status,
  };

  // ➕ Add new task to the task list
  tasks.push(newTask);
}
