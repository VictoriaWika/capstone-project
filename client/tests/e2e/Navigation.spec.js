/// <reference types="Cypress" />

describe('render Navigation and navigates to different sites', {
    browser: 'firefox',
    viewportWidth: 375,
    viewportHeight: 667,
  }, 
  () => {
    before(() => {
      cy.visit('/') 
    })
    
    it('renders the navigation menu', () => {
      cy.get('button[aria-label="toggle-navigation"]').should('exist')
    })

    it('opens the navigation and renders four links, with home set to active', () => {
      cy.get('button[aria-label="toggle-navigation"]').click()
      cy.get('a[aria-label="home"]').should('be.visible')
      cy.get('a[aria-label="home"]').should('have.class', 'active')
      cy.get('a[aria-label="like"]').should('be.visible')
      cy.get('a[aria-label="search"]').should('be.visible')
      cy.get('a[aria-label="trip"]').should('be.visible')
    })

    it('opens LikePage after clicking on like', () => {
      cy.get('a[aria-label="like"]').click()
      cy.url().should('include', '/liked')
      cy.wait(1000)
      cy.get('button[aria-label="toggle-navigation"]').click()
      cy.get('a[aria-label="like"]').should('have.class', 'active')
    })

    it('closes the navigation after clicking the icon', () => {
      cy.get('button[aria-label="toggle-navigation"]').click()
    })

    it('opens the navigation and closes it after clicking anywhere', () => {
      cy.get('button[aria-label="toggle-navigation"]').click()
      cy.get('p').click({force: true})
    })
})    