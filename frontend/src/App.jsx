import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    fetch("http://localhost:5000/contacts")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error("Error fetching contacts:", err));
  };

  const addContact = (newContact) => {
    fetch("http://localhost:5000/contacts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact)
    })
      .then(res => res.json())
      .then(data => {
        fetchContacts(); // Refresh contact list
      })
      .catch(err => console.error("Error adding contact:", err));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📇 Contact Database</h2>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
