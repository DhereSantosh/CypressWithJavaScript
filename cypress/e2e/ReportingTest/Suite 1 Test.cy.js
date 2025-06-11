describe('Suite 1 Test', () => {

  it('Suite 1 Test 1', () => {
    // Visit the OrangeHRM login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Enter username and password, then submit the form
    cy.log('Entering username and password');   
    // Verify that the username input field can be selected using different selectors
    cy.get('input[name="username"]').should('exist'); // By name attribute
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')

    cy.get('button[type="submit"]').then((element) => {
    cy.log("Button text: " + element.text());
    });

    cy.get('button[type="submit"]').click()
    cy.log('Verifying successful login'); 
  });

});