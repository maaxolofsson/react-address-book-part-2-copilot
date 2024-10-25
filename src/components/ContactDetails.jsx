import React from 'react';
import { useParams } from 'react-router-dom';

function ContactDetail({ contacts }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));

    if (!contact) {
        return <div>Contact not found</div>;
    }

    return (
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>
        </div>
    );
}

export default ContactDetail;