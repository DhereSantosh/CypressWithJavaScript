class LoginPage{

    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),  
        loginButton: () => cy.get('button[type="submit"]')
    }  
    
    visitLoginPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }


    enterUsername(username){
        this.elements.username().type(username);
    }
    enterPassword(password){
        this.elements.password().type(password);
    }   
    clickLoginButton(){
        this.elements.loginButton().click();
    }
}
module.exports = new LoginPage();
// This is a Cypress Page Object Model for the login page of OrangeHRM.