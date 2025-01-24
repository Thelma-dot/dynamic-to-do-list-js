// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn'); // Correct ID for the Add Task button
  const taskInput = document.getElementById('task-input'); // Input field for tasks
  const taskList = document.getElementById('task-list'); // Unordered list for tasks

  // Function to add a task to the list
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if the task text is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li) and set its text content
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; // Assign the class directly

    // Add an onclick event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(taskItem);
    };

    // Append the remove button to the list item
    taskItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(taskItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

      
