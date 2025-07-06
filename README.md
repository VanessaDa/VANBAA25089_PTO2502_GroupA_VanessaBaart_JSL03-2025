# Kanban Board | Launch Career

## 📌 Project Overview

This is a simple yet structured **task management system** built using vanilla JavaScript. The application allows users to **add new tasks, manage status**, and **filter completed tasks** — all through the browser console using interactive prompts.

It helps users understand **array manipulation**, **object-oriented programming**, **input validation**, and how to interact with users via the browser.

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
- 🔔 Alert when total task limit (9) is reached:  
  _"There are enough tasks on your board, please check them in the console."_

---

## 🛠️ Technologies Used

- HTML5 (basic structure)
- CSS3 (styling/layout)
- JavaScript (ES6+)

---

## 🧩 How It Works (Usage Instructions)

1. Open the project in your browser (e.g., open `index.html`)
2. The system allows adding up to **3 new tasks**, as long as the total task count doesn’t exceed **9**:
   - Enter task `title`
   - Enter task `description`
   - Enter task `status` (`todo`, `doing`, or `done`)
3. If the user adds the **9th and final allowed task**, an **alert** will appear:
   ```
   There are enough tasks on your board, please check them in the console.
   ```
4. After all prompts:
   - Open **Developer Console** (Right-click > Inspect > Console) to:
     - View **all tasks**
     - View **completed tasks** only

---

## ⚙️ Setup Instructions

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Follow the prompts and check the **console** output.

---

## 🧪 Example Console Output

```js
📋 All Tasks:
[
  { id: 1, title: "Gym", status: "todo", ... },
  { id: 9, title: "Buy groceries", status: "done", ... }
]

✅ Completed Tasks:
[
  { id: 3, title: "Sleep", status: "done", ... },
  { id: 9, title: "Buy groceries", status: "done", ... }
]
```

---

## 💡 Additional Usage Examples

### ➕ Adding New Tasks

**Input sequence example:**

```
Title: Buy groceries
Description: Get milk, eggs, and bread
Status: done
```

**Console Output:**

```js
📋 All Tasks:
[
  ...
  { id: 9, title: "Buy groceries", description: "Get milk, eggs, and bread", status: "done" }
]

✅ Completed Tasks:
[
  ...
  { id: 9, title: "Buy groceries", description: "Get milk, eggs, and bread", status: "done" }
]
```

---

### 🛑 Reaching the Task Limit

If the total number of tasks reaches **9**, after the final task is added:

**Alert shown:**

```
There are enough tasks on your board, please check them in the console.
```

No further tasks can be added after that.

---

### ❌ Entering an Invalid Status

**Prompt:**

```
Enter task status (todo, doing, done):
```

If you type an invalid status (e.g., `completed`), the system will repeat the prompt until you enter one of the valid options.

---

## 👤 Author

**Vanessa Baart**  
[GitHub](https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL03-2025.git)  
[LinkedIn](https://www.linkedin.com/in/vanessa-gwama-50841ab7)

---

## 📎 Notes

This project forms part of the [CodeSpace Academy](https://codespace.co.za/) JavaScript learning curriculum.  
Focus areas: arrays, loops, validation, prompts, conditional logic, and structured output.
