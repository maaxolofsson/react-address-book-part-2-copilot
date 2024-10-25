import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ContactDetail from './components/ContactDetails';
import CreateContact from './components/CreateContact';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/maaxolofsson/contact')
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    return (
        <Router>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/create">Create a contact</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Dashboard contacts={contacts} />} />
                <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
                <Route path="/create" element={<CreateContact setContacts={setContacts} />} />
            </Routes>
        </Router>
    );
}

export default App;