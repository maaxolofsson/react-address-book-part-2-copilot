import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ contacts }) {
    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;