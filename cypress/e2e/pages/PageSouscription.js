import { faker } from "@faker-js/faker";
import 'cypress-wait-until';
const locatorLinkRegister = '//a[@href="/register"]';
//const locatorLinkRegister = //a[contains(text(),"Vous n'avez pas de compte ? Créez-en un ici")]
const locatorInputPrenom = '//input[@formcontrolname="nom"]';
const locatorInputNom = '//input[@formcontrolname="prenom"]';
const locatorInputDateNaissance = '//input[@formcontrolname="dateNaissance"]';
const locatorInputAdresse = '//input[@formcontrolname="adresse"]';
const locatorSelectPays = '//select[@formcontrolname="currentPays"]';
const locatorSelectVille = '//select[@formcontrolname="ville"]';
const locatorInputCP = '//input[@formcontrolname="codePostal"]';
const locatorInputPassport = '//input[@formcontrolname="passport"]';
const locatorInputCIN = '//input[@formcontrolname="cin"]';
const locatorInputUsername = '//input[@formcontrolname="username"]';
const locatorInputTel = '//input[@formcontrolname="tel"]';
const locatorInputPassword = '//input[@formcontrolname="password"]';
const locatorInputConfirmPassword =  '//input[@formcontrolname="confirmPassword"]';
const locatorInputNomConjoint = '//input[@formcontrolname="nomConjoint"]';
const locatorInputPrenomConjoint = '//input[@formcontrolname="prenomConjoint"]';
const locatorInputDateNaissanceConjoint =  '//input[@formcontrolname="dateNaissanceConjoint"]';
const locatorSelectRaisonSociale = '//select[@formcontrolname="raisonSociale"]';
const locatorInputSiret = '//input[@formcontrolname="siret"]';
const locatorSelectNombreSalarie = '//select[@formcontrolname="nombreSalarie"]';
const locatorButtonValider = '//button[@class="btn btn-primary"]';

class PageSouscription {
  clickRegister() {
    return cy.xpath(locatorLinkRegister).click();
  }

  setType(index) {
    cy.get('input[name="type"]').eq(index).check();
  }

  setPrenom(texte) {
    return cy.xpath(locatorInputPrenom).first().type(texte);
  }

  setNom(texte) {
    return cy.xpath(locatorInputNom).type(texte);
  }

  setDateNaissance(texte) {
    return cy.xpath(locatorInputDateNaissance).type(texte);
  }

  setAdresse(texte) {
    return cy.xpath(locatorInputAdresse).type(texte);
  }

  setPays(texte) {
    return cy.xpath(locatorSelectPays).select(texte);
  }

  setVille(texte) {
    return cy.xpath(locatorSelectVille).select(texte);
  }

  setCodePostal(texte) {
    return cy.xpath(locatorInputCP).type(texte);
  }

  setPassport(texte) {
    return cy.xpath(locatorInputPassport).type(texte);
  }

  setCIN(texte) {
    return cy.xpath(locatorInputCIN).type(texte);
  }

  setEmail(texte) {
    return cy.xpath(locatorInputUsername).type(texte);
  }


  generateEmail(firstName, lastName) {
    const domain = faker.internet.domainName();
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  }

  setTel(texte) {
    return cy.xpath(locatorInputTel).type(texte);
  }

  setPassword(texte) {
    return cy.xpath(locatorInputPassword).type(texte);
    return cy.xpath(locatorInputConfirmPassword).type(texte);
  }

  setNomConjoint(texte) {
    return cy.xpath(locatorInputNomConjoint).type(texte);
  }

  setPrenomConjoint(texte) {
    return cy.xpath(locatorInputPrenomConjoint).type(texte);
  }

  setDateNaissanceConjoint(texte) {
    return cy.xpath(locatorInputDateNaissanceConjoint).type(texte);
  }

  setRaisonSociale(texte) {
    return cy.xpath(locatorSelectRaisonSociale).select(texte);
  }

  setSiret(texte) {
    return cy.xpath(locatorInputSiret).type(texte);
  }

  setNumberOfEmployees(texte) {
    return cy.xpath(locatorSelectNombreSalarie).select(texte);
  }

  validate() {
    return cy.xpath(locatorButtonValider).should('contain','/login').click();
        
  }
}

export default PageSouscription;
