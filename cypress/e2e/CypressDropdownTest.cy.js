describe('Cypress Dropdown Test Suite', () => {
//   it('Cypress Dropdown Test Case Without Select Tag', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
//     // Enter username and password, then submit the form
//     cy.log('Entering username and password');   
//     // Verify that the username input field can be selected using different selectors

//     cy.get('input[name="username"]').should('exist'); // By name attribute

//     cy.xpath('//input[@name="username"]').type('Admin')// By xpath selector
//     cy.xpath('//input[@name="password"]').type('admin123') // By xpath selector
//     cy.xpath('//button[@type="submit"]').click(); // By xpath selector

//     cy.log('Verifying successful login');
//     cy.url().should('include', '/dashboard'); // Verify that the URL includes '/dashboard' after login

//     // Verify dropdown menu interaction without using the Select
//     cy.xpath('//p[@class="oxd-userdropdown-name"]').click(); // Click on the user dropdown using xpath selector
//     cy.get('a[class="oxd-userdropdown-link"]').eq(0).click(); // Click on the first menu item using xpath selector

//   });

  it('Cypress Dropdown Test Case With Select Tag', () => {
    // Visit the OrangeHRM login page
    cy.visit('https://example.cypress.io/commands/actions');
    //cy.get('.action-select').select(1); // Select the first option in the dropdown using Index
    //cy.get('.action-select').select('oranges'); // Select the option with the visible text 'oranges'
    cy.get('.action-select').select('fr-bananas'); // Select the option with the value 'fr-bananas'
    
    
  });
});