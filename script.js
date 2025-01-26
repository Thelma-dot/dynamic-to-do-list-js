// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn'); // Button to add tasks
  const taskInput = document.getElementById('task-input'); // Input field for tasks
  const taskList = document.getElementById('task-list'); // List to display tasks

  // Function to add a task
  function addTask() {
    // Get the input value and trim any extra spaces
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; // Assign class name directly

    // Optional: Set inline styles for the button
    removeButton.style.backgroundColor = 'red';
    removeButton.style.color = 'white';
    removeButton.style.border = 'none';
    removeButton.style.cursor = 'pointer';

    // Add functionality to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(taskItem); // Remove the specific <li> from the list
    };

    // Append the button to the task item
    taskItem.appendChild(removeButton);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);

  // Allow pressing "Enter" to add a task
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
