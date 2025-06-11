describe('Login Test Suite', () => {
  it('Verifying successful login', () => {
    // Visit the OrangeHRM login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Enter username and password, then submit the form
    cy.log('Entering username and password');   
    // Verify that the username input field can be selected using different selectors

    cy.get('input[name="username"]').should('exist'); // By name attribute

    cy.xpath('//input[@name="username"]').type('Admin')// By xpath selector
    cy.xpath('//input[@name="password"]').type('admin123') // By xpath selector
    cy.xpath('//button[@type="submit"]').click(); // By xpath selector

    cy.log('Verifying successful login');


    cy.url().should('include', '/dashboard'); // Verify that the URL includes '/dashboard' after login


  });
});