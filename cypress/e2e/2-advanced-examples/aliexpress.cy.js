/// <reference types="cypress" />
describe('My First Test', () => {
    it('Visits alix', () => {
      cy.visit('https://best.aliexpress.com/')
      cy.title().should('include', 'mode')
      cy.get('a[href="//www.aliexpress.com/category/100003109/women-clothing-accessories.html"]').click()

      /* ==== Generated with Cypress Studio ==== */
      cy.get('#search-key').clear('d');
      cy.get('#search-key').type('diado');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.search-key-box').click();
      cy.get('#search-key').clear();
      cy.get('#search-key').type('lotto shoe men');
      cy.get('.search-button').click();



      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-accept').click();
      /* ==== End Cypress Studio ==== */
    })
  })    