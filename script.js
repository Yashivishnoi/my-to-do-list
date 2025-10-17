function addTask(category) {
  const input = document.getElementById(category + "Input");
  const list = document.getElementById(category + "List");

  const taskText = input.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("completed");
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
