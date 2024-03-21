import homeSaucePage from '../../pages/homeSaucePage'
import homeInvetoryPage from '../../pages/homeInvetoryPage '

describe('POM Test',()=>{

  beforeEach(()=>{
    cy.visit('https://www.ma-voyance-des-anges.com/')
  });
  

  it('should login to inventory page',() => {
   
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword(random_string);
    homeSaucePage.clickLogin();

    homeInvetoryPage.elements.titleSpan().should('have.text','Products');
  });

});
