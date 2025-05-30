let tasks = [];
let xp = 0;
let level = 1;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    input.value = "";
    renderTasks();
  }
}

function completeTask(index) {
  if (!tasks[index].completed) {
    tasks[index].completed = true;
    gainXP(10);
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function gainXP(amount) {
  xp += amount;
  while (xp >= level * 50) {
    xp -= level * 50;
    level++;
    alert(`🎉 Level Up! You're now level ${level}`);
  }
  updateStats();
}

function updateStats() {
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="completeTask(${index})">✔️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
  updateStats();
}
