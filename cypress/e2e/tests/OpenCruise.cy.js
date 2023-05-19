import LoginPage from "../pages/LoginPage";
import LoginStep from "../steps/LoginStep";
import StepSouscription from "../steps/StepSouscription";

describe('TEST WEB OPEN CRUISE', () => {
    beforeEach(() => {
        cy.visit("https://opencruise-ok.sogeti-center.cloud/")
    })
    it.skip('TEST01', () => {
        const loginStep = new LoginStep();
        cy.log(`Se Connecter Compte Valide`)
        loginStep.setLogin("admin@test.com", "Sogeti33");
        loginStep.checkMessage("Bienvenue ADMIN TEST")
        cy.xpath('//button[@id="dropdownMenu2"]').screenshot()

    });
    it.skip('TEST02', () => {
        const loginStep = new LoginStep();
        cy.log(`Se connecter Compte invalide`)
        loginStep.setLogin("XXXXXXX", "YYYYYY");
        cy.wait(1000);
        loginStep.CheckFailMessage("mot de passe ou identifiant invalide")
        cy.xpath('//div[@role="alertdialog"]').screenshot()
    });

    it('TEST03', () => {
        const stepSouscription = new StepSouscription
        cy.log('**********   Inscription Compte Particulier    ************')
        cy.fixture('data-part.json', 'utf8').as('users')
        cy.get('@users').then((data) => {
            
            data = stepSouscription.CreateCustomer(data)
            cy.writeFile("cypress/fixtures/userPart.json", JSON.stringify(data, null, 2), 'utf8')
            
        })

        });

    });
