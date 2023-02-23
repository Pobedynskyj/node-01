const fs = require("fs");
const path = require("path");

const contactsPath = path.join("db", "contacts.json");
console.log(contactsPath);

function listContacts() {
  fs.readFile(contactsPath);
}

function getContactById(id) {
  fs.readFile(contactsPath);
}

function removeContact(id) {
  fs.readFile(contactsPath);
}

function addContact(name, email, phone) {
  fs.writeFile(contactsPath);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
