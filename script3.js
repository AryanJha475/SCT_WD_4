let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskDate = document.getElementById("taskDate").value;
  let taskTime = document.getElementById("taskTime").value;

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = `${taskInput.value} (${taskDate || "No date"} ${taskTime || ""})`;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "action complete";
  completeBtn.onclick = () => li.classList.toggle("completed");

  let editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.className = "action edit";
  editBtn.onclick = () => editTask(li, taskText);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "action delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskText);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskTime").value = "";
}

function editTask(li, taskText) {
  let newTask = prompt("Edit your task:", taskText.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskText.textContent = newTask;
  }
}
