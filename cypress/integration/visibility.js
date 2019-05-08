/// <reference types="Cypress" />

describe('Smoke test', () => {
  it('отображает футер', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="red"]').should('be.visible')
    cy.get('[data-cy="green"]').should('be.visible')
    cy.get('[data-cy="blue"]').should('not.be.visible')
  })
})