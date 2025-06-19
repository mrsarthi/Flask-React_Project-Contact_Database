import React from 'react';

function ContactList({ contacts }) {
	return (
		<div>
			<h3>📝 Saved Contacts</h3>
			{contacts.length === 0 ? (
				<p>No contacts yet.</p>
			) : (
				<ul>
					{contacts.map((contact) => (
						<li key={contact.id}>
							<strong>{contact.name}</strong> — {contact.email} — {contact.phone}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ContactList;
