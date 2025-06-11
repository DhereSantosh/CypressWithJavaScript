describe('Cypress Selectors Test Suite', () => {
  it('Verify Element Selection Using Different Selectors', () => {
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

    //cy.get('.oxd-main-menu-item-wrapper > a').first().click(); // Click on the first main menu item

    //cy.get('.oxd-main-menu-item-wrapper > a').last().click(); // Click on the last main menu item

    //cy.get('.oxd-main-menu-item-wrapper > a').eq(5).click(); // Click on the given index menu item

    //cy.get('a[href^="https://www.orangehrm"]').click(); // Click on the link that starts with 'https://www.orangehrm'

    cy.get('a[href$="/viewPimModule"]').click(); // Click on the link that ends with '/viewPimModule'

    //cy.get('a[href*="Leave"]').click(); // Click on the link that contains CSS selector'Leave'

    //cy.contains('Recruitment').click(); // Click on the link that contains the text 'Recruitment' 
    
    cy.get('li[data-v-5327b38a]>a').eq(2).click(); // Click on the second menu item using a custom selector

    

  });
});