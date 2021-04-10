/// <reference types="Cypress" />

describe('render HomePage, randomize new cards and toggle details', {
    browser: 'firefox',
    viewportWidth: 375,
    viewportHeight: 667,
  }, 
  () => {
    before(() => {
      cy.visit('/') 
    })
  
    it('renders a heading, five cards and a button', () => {
      cy.get('h2').should('contain', 'Discover the world')
      cy.get('h2').siblings().should(($div) => {
        expect($div).to.have.length(6)
        const className = $div[0].className
        expect(className).to.match(/AttractionCard__Card/)
      })
      cy.get('button[aria-label="shuffle-random-suggestions"]').should('exist')
    })

    it('gives all five cards a like and unlikes the last one', () => {
      cy.get('span[aria-label="toggle-like"]').click({multiple: true, force: true})
      cy.get('span[aria-label="toggle-like"]').last().click()
    })

    it('shows the description of the first card', () => {
      cy.get('button[aria-label="toggle-details"]').first().click({force: true})
    })

    it('renders five new cards and scrolls to top', () => {
        cy.get('button[aria-label="shuffle-random-suggestions"]').focus()
        cy.get('button[aria-label="shuffle-random-suggestions"]').should('have.focus')
        cy.window().its('scrollY').should('not.equal', 0)
        cy.get('button[aria-label="shuffle-random-suggestions"]').click()
        cy.window().its('scrollY').should('equal', 0)
    })
})    