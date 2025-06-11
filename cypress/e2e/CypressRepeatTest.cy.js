describe('Cypress Repeat Test Suite', () => {
    // This test suite demonstrates how to repeat a test in Cypress
    // The test will run multiple times, which can be useful for testing stability or performance

    Cypress._.times(2, () => {
        it('Repeat Test', () => {
            // Visit the OrangeHRM login page
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            
            // Enter username and password, then submit the form
            cy.log('Entering username and password');   
            // Verify that the username input field can be selected using different selectors
            cy.get('input[name="username"]').should('exist'); // By name attribute
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123')

            cy.get('button[type="submit"]').click()
            cy.log('Verifying successful login');

        });
    });

});