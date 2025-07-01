# 📋 Task Management Console App (JSL03)

## 📌 Project Overview

This is a simple yet structured **task management system** built using vanilla JavaScript. The application allows users to **add new tasks, manage status**, and **filter completed tasks** — all through the browser console using interactive prompts.

The project is designed to help users organize their tasks effectively while learning about **array manipulation**, **object-oriented thinking**, and **user interaction** in JavaScript.

---

## 🚀 Features

- 🧠 Tasks stored as structured objects in an array
- ➕ Add up to **3 new tasks** through prompts
- 🔢 Automatically assign **incremental unique IDs** to each new task
- ✅ **Status input validation** (`todo`, `doing`, `done`)
- 🔍 **Filter** and view only completed tasks
- 📦 Console logs:
  - All tasks with the label: `"📋 All Tasks:"`
  - Completed tasks with the label: `"✅ Completed Tasks:"`
- 🔔 Alert when task limit is reached:  
  _"There are enough tasks on your board, please check them in the console."_

---

## 🛠️ Technologies Used

- HTML5 (basic structure)
- CSS3 (styling/layout)
- JavaScript (ES6+)

---

## 🧩 How It Works (Usage Instructions)

1. Open the project in your browser (e.g., `index.html`)
2. The system will **prompt you 3 times** (or fewer, if limit is reached):
   - Enter task `title`
   - Enter task `description`
   - Enter task `status` (`todo`, `doing`, or `done`)
3. Once tasks are entered, open the **Developer Console** (Right-click > Inspect > Console) to:
   - View **all tasks**
   - View **only completed tasks**
4. If total tasks reach 9, you’ll see:
   ```
   There are enough tasks on your board, please check them in the console.
   ```

---
