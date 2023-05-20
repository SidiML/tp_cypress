import LoginPage from "../pages/LoginPage";
import LoginStep from "../steps/LoginStep";
import StepSouscription from "../steps/StepSouscription";
import StepGestionCompte from "../steps/StepGestionCompte";

describe("TEST WEB OPEN CRUISE", () => {
  beforeEach(() => {
    cy.visit("https://opencruise-ok.sogeti-center.cloud/");
  });
  it.skip("TEST01", () => {
    const loginStep = new LoginStep();
    cy.log(`Se Connecter Compte Valide`);
    loginStep.setLogin("admin@test.com", "Sogeti33");
    loginStep.checkMessage("Bienvenue ADMIN TEST");
    cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
  });
  it.skip("TEST02", () => {
    const loginStep = new LoginStep();
    cy.log(`Se connecter Compte invalide`);
    loginStep.setLogin("XXXXXXX", "YYYYYY");
    cy.wait(1000);
    loginStep.CheckFailMessage("mot de passe ou identifiant invalide");
    cy.xpath('//div[@role="alertdialog"]').screenshot();
  });

  it.skip("TEST03", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   Inscription Compte Particulier    ************");
    cy.fixture("data-part.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePart(data);
      cy.writeFile(
        "cypress/fixtures/userPart.json",
        JSON.stringify(data, null, 2),
        "utf8"
      );
      cy.wait(2000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin("admin@test.com", "Sogeti33");
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      loginStep.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password);
      cy.wait(2000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      loginStep.Logout();
    });
  });
  it("TEST04", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   Inscription Compte Professionnel    ************");
    cy.fixture("data-pro.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePro(data);
      cy.writeFile("cypress/fixtures/userPro.json", JSON.stringify(data, null, 2), "utf8");
      cy.wait(2000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin("admin@test.com", "Sogeti33");
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      loginStep.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password);
      cy.wait(2000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      loginStep.Logout();
      
    });
  });
});
