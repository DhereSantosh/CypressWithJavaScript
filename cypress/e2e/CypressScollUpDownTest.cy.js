
describe('Cypress Scroll Up and Down Test Suite', () => {
  it('Verify Scolling', () => {

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

    cy.contains('Unassigned').last().scrollIntoView().should('be.visible').click(); // Scroll to the 'Unassigned' element and verify visibility
   
    cy.get('button[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]').scrollIntoView().should('be.visible').click(); // Scroll to the fifth button and verify visibility
  });
});