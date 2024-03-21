/// <reference types="cypress" />
describe('My First Test', () => {
    it('Visits Celeste', () => {
      cy.visit('https://www.ma-voyance-des-anges.com/')
      cy.title().should('include', 'Voyance Gratuite')
      cy.get('.vc_custom_1522308562096 > :nth-child(1) > .vc_row > .full_section_inner > .wpb_column > .vc_column-inner > :nth-child(1) > .qbutton').click()
      cy.get('.mobile_menu_button').click()
      cy.contains('Voyance des Anges Gratuite').click({force: true})
      cy.get('#cn-accept-cookie').click({force: true})
      cy.get('#firstname').type('12345')
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.wpcf7-list-item-label > [href="https://www.ma-voyance-des-anges.com/conditions-generales-utilisation/"]').click();
      /* ==== End Cypress Studio ==== */
     
    })
  })    