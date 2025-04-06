document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    function createTask(taskText) {
      const li = document.createElement('li');
      li.classList.add('task-item');
  
      const span = document.createElement('span');
      span.classList.add('task-text');
      span.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = '❌';
  
      // Toggle completed
      span.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      // Delete task
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
      }
    }
  
    addBtn.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  