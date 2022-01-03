describe('Gestionar To-Do', () => { 
  beforeEach(() => { 
    cy.visit('/')
  })

  it('Agregar una nueva tarea', () => {
    cy.get('[data-cy=taskForm] > input').type('Esta es una nueva tarea')
    cy.get('[data-cy=taskSubmit]').click();
  })

  it('Validar que la nueva tarea ha sido creada', () => {
    cy.get('[data-cy=tasksList]').last().should('contain', 'Esta es una nueva tarea');
  })

  it('Marcar una tarea como completada', () => {
    cy.get('[data-cy=taskitem] .btn-complete').click();
  })

  it('Validar que la tarea fue marcada como completada', () => {
    cy.get('[data-cy=taskitem]').should('have.class', 'completed');
    cy.get('[data-cy=taskitem] .btn-complete').should('have.class', 'reset');
  })

  it('Eliminar una tarea', () => {
    cy.get('[data-cy=taskitem] .btn-delete').click();
  })

  it('Validar que la tarea haya sido eliminada de la lista', () => {
    cy.get('[data-cy=tasksList]').should('be.empty');
  })
})