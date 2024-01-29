// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})

describe('Navigation Test', () => {
  it('navigates to /about when clicking on "about"', () => {
    cy.visit('/')
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
  })
})
