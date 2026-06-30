
let tasks = [];
let nextId = 1;

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const errorMsg = document.getElementById('errorMsg');
const nextIndexLabel = document.getElementById('nextIndex');


function pad(num) {
  return num.toString().padStart(2, '0');
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.add('visible');
  setTimeout(() => errorMsg.classList.remove('visible'), 2000);
}

function updateNextIndexLabel() {
  nextIndexLabel.textContent = pad(tasks.length + 1);
}

function updateFooter() {
  const remaining = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${remaining} task${remaining === 1 ? '' : 's'} left`;
}

function updateEmptyState() {
  emptyState.classList.toggle('visible', tasks.length === 0);
}


function render() {
  taskList.innerHTML = '';

  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.dataset.id = task.id;

    li.innerHTML = `
      <span class="task-index">${pad(i + 1)}</span>
      <input
        type="checkbox"
        class="task-checkbox"
        ${task.completed ? 'checked' : ''}
        aria-label="Mark '${escapeHtml(task.text)}' as ${task.completed ? 'incomplete' : 'complete'}"
      />
      <span class="task-text">${escapeHtml(task.text)}</span>
      <button type="button" class="remove-btn" aria-label="Remove '${escapeHtml(task.text)}'">Remove</button>
    `;

    taskList.appendChild(li);
  });

  updateEmptyState();
  updateFooter();
  updateNextIndexLabel();
}

// Basic escaping so user input can't inject markup
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


function addTask(text) {
  tasks.push({ id: nextId++, text, completed: false });
  render();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  render();
}

function removeTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}

function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  render();
}


taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();

  if (!text) {
    showError('Write something before adding it.');
    return;
  }

  addTask(text);
  taskInput.value = '';
  taskInput.focus();
});

// Delegate clicks/changes on the list to handle toggle + remove
taskList.addEventListener('click', (e) => {
  const li = e.target.closest('.task-item');
  if (!li) return;
  const id = Number(li.dataset.id);

  if (e.target.classList.contains('remove-btn')) {
    removeTask(id);
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('task-checkbox')) {
    const li = e.target.closest('.task-item');
    const id = Number(li.dataset.id);
    toggleTask(id);
  }
});

clearCompletedBtn.addEventListener('click', clearCompleted);

render();