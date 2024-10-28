/**
 * @jest-environment jest-environment-jsdom
 */

const { addTask } = require('./index.js');

describe('Task manage function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
     <div class="writeTaskContainer">
      <input type="text" id="task-input" placeholder="Enter a task" />
      <button type="submit" id="add-task-btn">Add task</button>
    </div>
    <div class="list">
      <ul id="tasks"></ul>
    </div>
    `;
  });

  test('should add task to the list', () => {
    const taskInput = document.getElementById('task-input');
    taskInput.value = 'Test Task';

    const addBtn = document.getElementById('add-task-btn');
    addBtn.click();

    const tasksList = document.querySelector('ul');
    const taskItems = tasksList.querySelectorAll('li');

    expect(taskItems.length).toBe(1);
    expect(taskItems[0].textContent).toContain('Test Task');
  });

  test('Should delete a task when delete button is clicked', () => {
    const taskInput = document.getElementById('task-input');
    taskInput.value = 'Test Task';

    const addBtn = document.getElementById('add-task-btn');
    addBtn.click();

    const deleteBtn = document.querySelector('ul li button'); // Select the delete button inside the task
    deleteBtn.click();

    const tasksList = document.querySelector('ul');
    const taskItems = tasksList.querySelectorAll('li');

    expect(taskItems.length).toBe(0);
  });
});

// describe("Adding functions to the buttons and elements", () => {
//   const taskInput = document.getElementById('task-input').value.trim();
//   const checkBox = document.createElement('input');
//   const tasks = document.createElement('li');
//   const deleteBtn = document.createElement('button');

//   it("delete task after clicking", () =>
//   deleteBtn.click();
//   expect(tasks.textContent).toBe("0");
// });

// it("adds task", () => {
//   taskInput.input();
//   expect(tasks.textContent).toBe("1");
// });

// )};
