import 'cypress-iframe'; // Import the cypress-iframe plugin

describe('Cypress Retry & Rerun Test Suite', () => {
  it('Verify Elements in IFrames',{retries:1} ,() => {

    cy.visit('./iframesdemo.html'); // Adjust the path to your iframe page
    cy.frameLoaded('[name="myframe"]'); // Load the iframe by its name or selector
    cy.iframe().contains('About').click(); // Click on the 'About' link inside the iframe
  });
});