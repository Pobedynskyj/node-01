const fs = require("fs").promises;
const path = require("path");
require("colors");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join("db", "contacts.json");
console.log(contactsPath);

async function listContacts() {
  const list = await fs.readFile(contactsPath);
  return JSON.parse(list);
}

async function getContactById(contactId) {
  const data = await listContacts();
  const contactById = data.find(({ id }) => id === contactId);
  return contactById;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const deleteContacts = data.filter(({ id }) => id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(deleteContacts));
  console.log(`Contact ${contactId} was removed!`.red);
}

async function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  const data = await listContacts();
  const newData = [...data, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newData));
  console.log(`Contact "${name}" was added!`.green);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
