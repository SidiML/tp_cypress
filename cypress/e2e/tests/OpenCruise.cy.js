import LoginPage from "../pages/LoginPage";
import LoginStep from "../steps/LoginStep";


describe('TEST WEB OPEN CRUISE', () => {
    beforeEach(() => {
        cy.visit("https://opencruise-ok.sogeti-center.cloud/")
    })
    it('TEST01', () => {
        const loginStep =   new LoginStep();
        cy.log(`Se Connecter Compte Valide`)
        loginStep.setLogin("admin@test.com","Sogeti33"); 
        loginStep.checkMessage("Bienvenue ADMIN TEST")
        cy.xpath('//button[@id="dropdownMenu2"]').screenshot()
             
    });
    it('TEST02', () => {
        const loginStep = new   LoginStep();
        cy.log(`Se connecter Compte invalide`)
        loginStep.setLogin("XXXXXXX","YYYYYY");
        cy.wait(1000);
        loginStep.CheckFailMessage("mot de passe ou identifiant invalide")
        cy.xpath('//div[@role="alertdialog"]').screenshot()
    });
    
});
