import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

    if (contacts.length > 0) return contacts;

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  //on change
  useEffect(() => {
    // save contacts to local storage
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(data) {
    setContacts([...contacts, data]);
  }

  function deleteContact(contact) {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onNewContact={addContact} />
      <SearchBox onSearch={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
