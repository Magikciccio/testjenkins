describe('TestMochatest', () => {
    beforeEach(() => {
      cy.visit('https://mochajs.org/');
      cy.viewport(876, 973);
    });
  
    it('should test mochatest', () => {
      cy.get('#mocha-logo').click();
      cy.window().then((win) => {
        const theURL = win.location.href;
        cy.log(theURL);
        const theLogo = win.document.getElementById('tag').innerText;
        cy.log(theLogo);
        const theLogo2 = win.document.getElementsByTagName('em')[1].innerText;
        cy.log(theLogo2);
      });
    });
  });
  