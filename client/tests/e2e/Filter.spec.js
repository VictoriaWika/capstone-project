/// <reference types="Cypress" />

describe('filters by continent location and user input', () => {
    
  before(() => {
    cy.visit('/search') 
  })
  
  it('renders Searchbar and ContinentFilter', () => {
    cy.get('input[placeholder="Wanderlust?"]').should('exist')
    cy.get('svg[aria-label="africa-filter"]').should('exist')
    cy.get('svg[aria-label="asia-filter"]').should('exist')
    cy.get('svg[aria-label="europe-filter"]').should('exist')
    cy.get('svg[aria-label="north-america-filter"]').should('exist')
    cy.get('svg[aria-label="oceania-filter"]').should('exist')
    cy.get('svg[aria-label="south-america-filter"]').should('exist')
  })

  it('filters according to the users input', () => {
    cy.get('input[placeholder="Wanderlust?"]').type('lake', {force: true})
    cy.get('h2').should('contain', 'lake')
    cy.get('input[placeholder="Wanderlust?"]').clear()
    cy.get('input[placeholder="Wanderlust?"]').type('fes', {force: true})
    cy.get('h2').should('contain', 'fes')
    cy.get('input[placeholder="Wanderlust?"]').clear()
  })

  it('filters according to ContinentFilter', () => {
    cy.get('svg[aria-label="oceania-filter"]').click()
    cy.get('h2').siblings().contains((/oceania/i))
  })

  it('resets the ContinentFilter once reset button is clicked', () => {
    cy.get('button[aria-label="reset-filter"]').click()
    cy.get('span').should('contain', 'All continents')
  })
})
    