/// <reference types="Cypress" />

describe('<CreateForm />', {
  browser: 'firefox',
  viewportWidth: 375,
  viewportHeight: 667,
}, 
() => {
  before(() => {
    cy.visit('/create-trip')
  })

  it('renders two select, two input fields and a button', () => {
      cy.get('select[name="continent"]').should('exist')
      cy.get('select[name="location"]').should('exist')
      cy.get('input[name="startDate"]').should('exist')
      cy.get('input[name="endDate"]').should('exist')
      cy.get('button[aria-label="submit-form"]').should('exist')
  })

  it('creates a Card with the right input', () => {
    cy.get('select[name="continent"]').select('Europe')
    cy.get('select[name="location"]').select('Lisbon')
    cy.get('input[name="startDate"]').click().type('2021-04-22')
    cy.get('input[name="endDate"]').click().type('2021-04-29')
    cy.get('button[aria-label="submit-form"]').click()
    cy.get('h3').contains('Lisbon')
})
})
  