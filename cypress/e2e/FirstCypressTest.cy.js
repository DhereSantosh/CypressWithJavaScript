
describe('Test Suite 1', () => {
  it('Login to OHRM App Test', () => {
    
    // Visit the OrangeHRM login page and perform login;
    cy.log('Visiting the OrangeHRM login page')   
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.log('Entering username and password')
    // Enter username and password, then submit the form
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.log('Verifying successful login')
    // Verify that the URL includes '/dashboard' after login  
    cy.url().should('include', '/dashboard')  
    cy
  })
})  