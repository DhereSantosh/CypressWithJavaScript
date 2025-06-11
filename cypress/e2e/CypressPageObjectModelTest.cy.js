//import loginPage from '../e2e/pageObjects/LoginPage';
//import homePage from '../pageObjects/HomePage'; 
import loginPage from '../e2e/pageObjects/LoginPage.cy.js';
import homePage from '../e2e/pageObjects/HomePage.cy.js';

describe('Cypress Page Object Model Test Suite', () => {
    

    it('Page Object Model Test Test', () => {
        
        // Visit the OrangeHRM login page using the page object method
        loginPage.visitLoginPage();

        // Enter username and password using the page object methods
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        
        // Click the login button
        loginPage.clickLoginButton();

        // Verify successful login by checking the presence of the dashboard header
        //cy.get('.oxd-topbar-header-title').should('contain.text', 'Dashboard');
        homePage.checkDashboardTitle();
          
    });

}   );