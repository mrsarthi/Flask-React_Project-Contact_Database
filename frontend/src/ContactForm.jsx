import React, { useState } from 'react';

function ContactForm({ onAdd }) {
	const [form, setForm] = useState({ name: '', email: '', phone: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email) {
			alert("Name and Email are required!");
			return;
		}
		onAdd(form);
		setForm({ name: '', email: '', phone: '' });  // Clear form
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={form.name}
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="phone"
				placeholder="Phone"
				value={form.phone}
				onChange={handleChange}
			/>
			<button type="submit">Add Contact</button>
		</form>
	);
}

export default ContactForm;
