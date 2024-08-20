function addRow() {
  const table = document
    .getElementById("taskTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  const taskCell = newRow.insertCell(0);
  const statusCell = newRow.insertCell(1);
  const priorityCell = newRow.insertCell(2);

  taskCell.innerHTML = getRandomTask();
  statusCell.innerHTML =
    '<select><option value="">Select</option><option value="done">Done</option><option value="cancelled">Cancelled</option><option value="pending">Pending</option></select>';

  statusCell.querySelector("select").addEventListener("change", function () {
    if (this.value === "done") {
      statusCell.className = "status-done";
    } else if (this.value === "cancelled") {
      statusCell.className = "status-cancelled";
    } else if (this.value === "pending") {
      statusCell.className = "status-pending";
    } else {
      statusCell.className = "";
    }
  });

  priorityCell.innerHTML = `
    <div class="priority-wrapper">
      <select>
        <option value="">Select</option>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <span class="priority-label"></span>
    </div>`;
  const select = priorityCell.querySelector("select");
  const priorityLabel = priorityCell.querySelector(".priority-label");

  select.addEventListener("change", function () {
    if (this.value === "low") {
      newRow.className = "priorized";
      priorityLabel.textContent = "Low";
      priorityLabel.className = "priority-low";
    } else if (this.value === "normal") {
      newRow.className = "priorized";
      priorityLabel.textContent = "Normal";
      priorityLabel.className = "priority-normal";
    } else if (this.value === "high") {
      newRow.className = "priorized";
      priorityLabel.textContent = "High";
      priorityLabel.className = "priority-high";
    } else {
      newRow.className = "";
      priorityLabel.textContent = "";
      priorityLabel.className = "";
    }
  });
}

function clearTable() {
  const table = document
    .getElementById("taskTable")
    .getElementsByTagName("tbody")[0];

  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

function getRandomTask() {
  const index = Math.floor(Math.random() * (tasks.length - 1));
  return tasks[index];
}

const tasks = [
  "Haiku about taxes",
  "Plot twist: Earth is rounded",
  "Superpower, why?",
  "Story: 'I can fly'",
  "New ice cream flavor: 'Nuclear waste'",
  "Unique business idea",
  "Food rap battle",
  "New holiday: Regretmas",
  "Business idea: 'NFT for nothing'",
  "Detective: missing sock",
  "Movie scene: 'AI takes over a Zoom meeting'",
  "Future self advice",
  "New board game",
  "Movie scene, no movie",
  "New language: sarcasm",
  "Time travel: self-sabotage",
  "Poem about object",
];
