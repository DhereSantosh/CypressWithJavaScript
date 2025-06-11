describe('PIM Test Suite', () => {
  it('Verifying successful PIM Loading', () => {
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


    cy.url().should('include', '/dashboard'); // Verify that the URL includes '/dashboard' after login

    cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then((element) => {
      cy.log("Header text: " + element.text());
      expect(element.text()).to.include('Dashboard'); // Verify that the header contains 'Dashboard'
    });
    
    cy.get('a[href$="/viewPimModule"]').click(); // Click on the link that ends with '/viewPimModule'
  });
});