import React, { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/contacts')  // Flask backend endpoint
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((c, index) => (
          <li key={index}>{c.name} — {c.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
