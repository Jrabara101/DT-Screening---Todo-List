# DT-Screening---Todo-List
exam for Diretcho Trabaho PH for React Training 

For the HTML:

<div class="input-section">
  <input type="text" id="taskInput" placeholder="Add a new task..." />
  <button id="addBtn">Add</button>
</div>
<ul id="taskList"></ul>

#taskInput is where the user types a task.
#addBtn is the button the user clicks to add the task.
#taskList is the list that will hold each task (<li> elements).

For the CSS:

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #888;
}

Uses flexbox to align elements nicely. Gives spacing, rounded borders, and hover effects. 
Tasks marked as completed get a line-through via the .completed class. Ensures the layout adapts on small screens (like phones).

For the Javascript:

document.addEventListener('DOMContentLoaded', () => {
  Ensures the JavaScript runs after the HTML page has fully loaded.

const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
  Gets the elements from the HTML so we can interact with them in code.



------- For Adding Task ------

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
}

This is the code for adding the task 

Gets the text from the input. If it’s not empty, it calls createTask() to add the task. Clears the input after adding.

--------- For Creating Task --------v

function createTask(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const span = document.createElement('span');
  span.classList.add('task-text');
  span.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = '❌';
Creates an <li> element to hold the task.

Inside that, it creates:

a <span> for the task text. Button for deleting.



-------- Marking and Delete the Task --------

span.addEventListener('click', () => {
  li.classList.toggle('completed');
});

When the task text is clicked, it toggles the class completed, which triggers the strike-through effect from CSS.

deleteBtn.addEventListener('click', () => {
  li.remove();
});

When the ❌ button is clicked, it removes the entire <li> from the list.
