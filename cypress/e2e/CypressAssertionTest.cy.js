describe('Cypress Assertion With Equal/HaveText/Contain Test Suite', () => {
  it('Verify URL and Page Title', () => {
    // Visit the OrangeHRM login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify that the URL includes '/auth/login'
    cy.url().should('include', '/auth/login');

    // Verify that the page title is 'OrangeHRM'
    cy.title().should('eq', 'OrangeHRM');

    // Verify that the page contains the text 'Username'
    cy.get('label[class="oxd-label"]').first().then((Element) => {
      // Use the 'text' method to get the text content of the element
      expect(Element.text()).to.equal('Username');
    });

    cy.get('label[class="oxd-label"]').first().should('have.text', 'Username');

    // Verify that the first label element contains the text 'Username'
    cy.get('label[class="oxd-label"]').first().should('contain', 'Username');

    cy.get('label[class="oxd-label"]').first().should('have.html', 'Username');

    cy.get('button[type="submit"]').should('have.html', '<!----> Login <!---->').and('have.attr', 'class');

    cy.get('button[type="submit"]').should('have.html', '<!----> Login <!---->').
    and('have.attr', 'class').and("include", 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button');

    cy.get('label[class="oxd-label"]').first().then((Element) => {
      // Use the 'text' method to get the text content of the element
      expect(Element.text()).to.have.length(8);
    });
    
  });
});
// describe('Cypress Assertion With Visible/contain text Test Suite', () => {
//   it('Verify Element Visibility and Text', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the username input field is visible
//     cy.get('input[name="username"]').should('be.visible');

//     // Verify that the login button contains the text 'Login'
//     cy.get('button[type="submit"]').should('contain.text', 'Login');
//   });
// }); 
// describe('Cypress Assertion With have HTML/have length Test Suite', () => {
//   it('Verify Element Existence and Count', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the username input field exists
//     cy.get('input[name="username"]').should('have.html', 'Username');

//     // Verify that there are exactly two input fields on the page
//     cy.get('input').should('have.length', 2);
//   });
// });
// describe('Cypress Assertion Test Suite', () => {
//   it('Verify Element Attributes', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the username input field has the correct placeholder attribute
//     cy.get('input[name="username"]').should('have.attr', 'placeholder', 'Username');

//     // Verify that the login button is enabled
//     cy.get('button[type="submit"]').should('not.be.disabled');
//   });
// });

// describe('Cypress Assertion Test Suite', () => {
//   it('Verify Element CSS Properties', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the login button has a specific background color
//     cy.get('button[type="submit"]').should('have.css', 'background-color').and('eq', 'rgb(255, 255, 255)'); // Adjust color as needed

//     // Verify that the username input field has a specific font size
//     cy.get('input[name="username"]').should('have.css', 'font-size').and('eq', '16px'); // Adjust size as needed
//   });
// });
// describe('Cypress Assertion Test Suite', () => {
//   it('Verify Element Text Content', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the login button contains the text 'Login'
//     cy.get('button[type="submit"]').should('contain.text', 'Login');

//     // Verify that the username input field is empty
//     cy.get('input[name="username"]').should('have.value', '');
//   });
// });
// describe('Cypress Assertion Test Suite', () => {
//   it('Verify Element State', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Verify that the username input field is enabled
//     cy.get('input[name="username"]').should('be.enabled');

//     // Verify that the login button is visible
//     cy.get('button[type="submit"]').should('be.visible');
//   });
// });
// describe('Cypress Assertion Test Suite', () => {
//   it('Verify Element Interaction', () => {
//     // Visit the OrangeHRM login page
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Type into the username input field and verify the value
//     cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin');

//     // Click the login button and verify that it redirects to the dashboard
//     cy.get('button[type="submit"]').click();
//     cy.url().should('include', '/dashboard');
//   });
// }); 
