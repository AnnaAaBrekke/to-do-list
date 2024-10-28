describe('To-Do List: Add and Delete Task', () => {
  beforeEach(() => {
    // Visit your app's page before each test
    cy.visit('http://127.0.0.1:5500/index.html'); // Adjust this URL to match your local dev environment
  });

  it('should add a task to the list', () => {
    // Enter a task into the input field
    cy.get('#task-input').type('New Task');

    // Click the Add Task button
    cy.get('#add-task-btn').click();

    // Assert that the task appears in the list
    cy.get('ul').should('contain.text', 'New Task');
  });

  it('should clear the input field after adding a task', () => {
    // Enter a task into the input field
    cy.get('#task-input').type('Clear Test Task');

    // Click the Add Task button
    cy.get('#add-task-btn').click();

    // Assert that the input field is cleared
    cy.get('#task-input').should('have.value', '');
  });

  it('should delete a task from the list', () => {
    // Enter a task into the input field
    cy.get('#task-input').type('Delete Me');

    // Click the Add Task button
    cy.get('#add-task-btn').click();

    // Assert that the task appears in the list
    cy.get('ul').should('contain.text', 'Delete Me');

    // Click the delete button next to the task
    cy.contains('Delete Me').parent().find('button').click();

    // Assert that the task is no longer in the list
    cy.get('ul').should('not.contain.text', 'Delete Me');
  });

  it('should show an alert if the input is empty', () => {
    // Spy on the alert method
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Task is empty. Please try again');
    });

    // Click the Add Task button without entering a task
    cy.get('#add-task-btn').click();
  });
});
