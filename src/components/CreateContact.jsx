import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateContact({ setContacts }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://boolean-uk-api-server.fly.dev/maaxolofsson/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newContact => {
                setContacts(prevContacts => [...prevContacts, newContact]);
                navigate('/');
            });
    };

    return (
        <div>
            <h1>Create a Contact</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateContact;