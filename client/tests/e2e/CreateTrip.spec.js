/// <reference types="Cypress" />

describe('Create Trip, add sights and delete trip', () => {
  
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
    cy.get('select[name="continent"]').select('Europe').should('have.value', 'Europe')
    cy.get('select[name="location"]').select('Lisbon').should('have.value', 'Lisbon')
    cy.get('input[name="startDate"]').click().type('2021-04-22').should('have.value', '2021-04-22')
    cy.get('input[name="endDate"]').click().type('2021-04-29').should('have.value', '2021-04-29')
    cy.get('button[aria-label="submit-form"]').should('contain', 'Create Trip').click()
    cy.url().should('include', '/trips')
    cy.get('h3').should('contain', 'Lisbon')
  })

  it('adds first sight to the trip and click show more on TripCard', () => {
    cy.get('a[aria-label="navigate-to-add-sights"]').click()
    cy.get('button[aria-label="toggle-add-sight"]').first().click({force: true})
    cy.get('button[aria-label="go-back"]').click()
    cy.get('button[aria-label="toggle-details"]').click()
    cy.get('button[aria-label="delete-trip"]').should('be.visible')
  })

  it('focuses on the delete button and deletes the trip', () => {
    cy.get('button[aria-label="delete-trip"]').focus().should('have.focus')
    cy.get('button[aria-label="delete-trip"]').click()
  })

  it('navigates back to the CreateForm, once trip is deleted', () => {
    cy.get('a[aria-label="your-trips"]').should('have.class', 'active')
    cy.get('a[aria-label="plan-trip"]').should('have.attr', 'href').and('equal', '/create-trip')
    cy.get('a[aria-label="plan-trip"]').click()
    cy.url().should('include', '/create-trip')
  })
})
  