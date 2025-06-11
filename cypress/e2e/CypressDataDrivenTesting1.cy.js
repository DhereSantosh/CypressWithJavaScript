describe('Cypress Data Driven Testing Suite', () => {

    let testData;

    // Load the data from the fixture file
    before('Run Before All Tests',() => {
        cy.fixture('datadriventesting1.json').then((jsonTestdata) => {
            testData = jsonTestdata; // Store the data in the context for use in tests
        })
    });
    // Test case to verify successful login using data from the fixture

  it('Data Driven Test1', () => {
    // Visit the OrangeHRM login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Enter username and password, then submit the form
    cy.log('Entering username and password');   
    // Verify that the username input field can be selected using different selectors
    cy.get('input[name="username"]').should('exist'); // By name attribute
    cy.get('input[name="username"]').type(testData.username) // Using data from fixture
    cy.get('input[name="password"]').type(testData.password) // Using data from fixture

    cy.get('button[type="submit"]').click()
    cy.log('Verifying successful login');
  });
});