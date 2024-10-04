function addTask() {
  const taskInput = document.getElementById('task-input').value.trim();

  if (taskInput !== '') {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const tasks = document.createElement('li');
    tasks.textContent = taskInput;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';

    deleteBtn.addEventListener('click', () => {
      tasks.remove();
    });

    tasks.insertBefore(checkBox, tasks.firstChild);
    document.querySelector('ul').appendChild(tasks);
    tasks.appendChild(deleteBtn);

    document.getElementById('task-input').value = '';
  } else {
    alert('Task is empty. Please try again');
  }
}

const addBtn = document.getElementById('add-task-btn');
addBtn.addEventListener('click', addTask);

// Further: add icons instead of text (delete)
// Further: create branches for next steps
// Further: add actions to workflow with pages
// Further: create tests (jest and cypress)
// Further: save to local storage
// Further: login to see your personal to do list and then save to ur use
