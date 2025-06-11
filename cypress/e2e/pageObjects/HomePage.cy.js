class HomePage{

    elements = {
        dashboard: () => cy.get('.oxd-topbar-header-breadcrumb >h6')
    }  

    checkDashboardTitle() {
        this.elements.dashboard().should('contain.text', 'Dashboard');
    }   
    

}
module.exports = new HomePage();
// This is a Cypress Page Object Model for the home page of OrangeHRM.