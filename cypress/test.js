import { faker } from "@faker-js/faker";
// //const faker = require('@faker-js/faker')
// console.log(faker.internet.email())

// Fonction pour générer un email fictif avec le format nom.prenom@xxxxxx.com
function generateEmail(firstName, lastName) {
  const domain = faker.internet.domainName();
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

// Fonction pour générer un nom fictif
function generateFullName() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return `${firstName} ${lastName}`;
}

// Utilisation de la fonction pour générer un email fictif
const fullName = generateFullName();
const [firstName, lastName] = fullName.split(" ");
const email = generateEmail(firstName, lastName);

console.log("Nom complet:", fullName);
console.log("Email fictif:", email);
