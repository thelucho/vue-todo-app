describe('Gestionar ToDo', () => { 
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/')
  })

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Verificar button = disabled cuando el formulario esté invalido', () => {
    cy.get('[data-cy=taskForm]').find('button').should('be.disabled')
  })

  it('Agregar una nueva tarea', () => {
    cy.get('[data-cy=taskForm]').within(() => {
      cy.get('input').type('Esta es una nueva tarea')
      cy.get('button').click();
    })
  })

  it('Validar que la nueva tarea ha sido creada', () => {
    cy.get('[data-cy=taskItem]').last().should('contain', 'Esta es una nueva tarea')
  })

  it('Marcar una tarea como completada', () => {
    cy.get('[data-cy=taskItem]').find('.btn-complete').click()
  })

  it('Validar que la tarea fue marcada como completada', () => {
    cy.get('[data-cy=taskItem]').should('have.class', 'completed')
    cy.get('[data-cy=taskItem]').find('.btn-complete').should('have.class', 'reset')
  })

  it('Eliminar una tarea', () => {
    cy.get('[data-cy=taskItem]').find('.btn-delete').click()
  })

  it('Validar que la tarea haya sido eliminada de la lista', () => {
    cy.get('[data-cy=tasksList]').find('ul > li').should('not.exist')
  })
})