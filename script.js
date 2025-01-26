// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');



  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Function to add a task
function addTask(taskText, save = true) {
  // Create task list item
  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'removeButton';
  removeButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      removeTask(taskText);
  });
  taskItem.appendChild(removeButton);

  // Append task to the list
  taskList.appendChild(taskItem);

  // Save task to Local Storage
  if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}

// Function to remove a task
function removeTask(taskText) {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const updatedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Add task event listener
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
      addTask(taskText);
      taskInput.value = ''; // Clear the input field
  }
});

// Load tasks when the page loads
loadTasks();
});

  // Function to add a new task
  function addTask() {
      // Get and trim the input value
      const taskText = taskInput.value.trim();

      // Check if the input is empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new list item (li) for the task
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');

      // Add an event listener to remove the task when clicked
      removeButton.onclick = () => {
          taskList.removeChild(li);
      };

      // Append the remove button to the list item
      li.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = "";
  }

  // Add event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Add event listener to the input field for the "Enter" key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });

