export function addTask() {
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
addBtn?.addEventListener('click', addTask);

// Further: create tests (Jest)
// Further: create test (Cypress)
// Further: add actions to workflow with pages
// Further: save to local storage
// Further: login to see your personal to do list and then save to ur use
// Further: add icons instead of text (delete)
