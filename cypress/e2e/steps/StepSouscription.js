import { faker } from "@faker-js/faker";
import PageSouscription from "../pages/PageSouscription"

const pageSouscription = new PageSouscription;

class StepSouscription{

    CreateCustomer(data){
        pageSouscription.clickRegister()
        pageSouscription.setType(data.type)
        const prenom = faker.person.firstName()
        data.prenom = prenom
        pageSouscription.setPrenom(prenom)
        const nom = faker.person.lastName()
        data.nom = nom
        pageSouscription.setNom(nom)
        pageSouscription.setDateNaissance(data.dateNaissance)
        pageSouscription.setAdresse(data.adresse)
        pageSouscription.setPays(data.pays)
        pageSouscription.setVille(data.ville)
        pageSouscription.setCodePostal(data.codePostal)
        pageSouscription.setPassport(data.passport)
        pageSouscription.setCIN(data.cin)
        const username = pageSouscription.generateEmail(prenom, nom)
        data.email = username
        pageSouscription.setEmail(username)
        pageSouscription.setTel(data.tel)
        pageSouscription.setPassword(data.password)
        pageSouscription.setNomConjoint(faker.person.lastName())
        pageSouscription.setPrenomConjoint(faker.person.firstName())
        pageSouscription.setDateNaissanceConjoint(data.dateNaissanceConjoint)
        pageSouscription.validate()
        return data


    }
}

export default StepSouscription