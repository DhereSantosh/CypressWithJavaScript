const jsonData = require('../fixtures/datadriventesting2.json');

describe('Cypress Data Driven Testing With Multiple lines of TestData', () => {

    jsonData.forEach((testData) => {
        it(`Data Driven Test for ${testData.username}`, () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
      // Enter username and password, then submit the form
        cy.log('Entering username and password');   
      // Verify that the username input field can be selected using different selectors
        cy.get('input[name="username"]').should('exist'); // By name attribute
        cy.get('input[name="username"]').type(testData.username) // Using data from fixture
        cy.get('input[name="password"]').type(testData.password) // Using data from fixture

        cy.get('button[type="submit"]').click()
        //cy.log('Verifying successful login');
      })
    });
})