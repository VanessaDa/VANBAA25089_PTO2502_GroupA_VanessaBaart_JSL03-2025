# Kanban Board | Launch Career

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

## ⚙️ Setup Instructions

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Open the browser console to interact with the task system.

---

## 🧪 Example Console Output

```js
📋 All Tasks:
[
  { id: 1, title: "Gym", status: "todo", ... },
  { id: 7, title: "Buy groceries", status: "done", ... }
]

✅ Completed Tasks:
[
  { id: 3, title: "Sleep", status: "done", ... },
  { id: 7, title: "Buy groceries", status: "done", ... }
]
```

---

## 👤 Author

**Vanessa Baart**  
[GitHub](https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL03-2025.git)
[LinkedIn] (www.linkedin.com/in/vanessa-gwama-50841ab7)

---

## 📎 Notes

This project forms part of the [CodeSpace Academy](https://codespace.co.za/) JavaScript learning curriculum.  
Focus areas: arrays, loops, object creation, validation, and console logging.

---

## 💡 Additional Usage Examples

### ➕ Adding New Tasks

When prompted in the browser:

**Example input sequence:**

```
Title: Buy groceries
Description: Get milk, eggs, and bread
Status: done
```

**Result in console:**

```js
📋 All Tasks:
[
  ...
  { id: 7, title: "Buy groceries", description: "Get milk, eggs, and bread", status: "done" }
]
✅ Completed Tasks:
[
  ...
  { id: 7, title: "Buy groceries", description: "Get milk, eggs, and bread", status: "done" }
]
```

---

### 🛑 Reaching the Task Limit

If the total number of tasks reaches **9**, and you try to add another:

**Alert shown:**

```
There are enough tasks on your board, please check them in the console.
```

No new prompts will appear after this.

---

### ❌ Entering an Invalid Status

**Prompt:**

```
Enter task status (todo, doing, done):
```

**If user types:** `completed`

**Alert shown:**

```
Invalid status. Please enter 'todo', 'doing', or 'done'.
```

Prompt will repeat until a valid input is given.
