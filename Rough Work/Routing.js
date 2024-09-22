// Parameterized API and Routing in Node.js
// Definition: Parameterized APIs in Node.js allow
//  you to create dynamic routes that accept variables in the URL. 
//  This enables the API to respond to requests for specific resources,
//   such as user details based on their ID.

// Example:

const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
const persons = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// Parameterized route
app.get('/person/:id', (req, res) => {
    const personId = parseInt(req.params.id, 10);
    const person = persons.find(p => p.id === personId);

    if (person) {
        res.json(person);
    } else {
        res.status(404).send('Person not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


/*
How It Works:

Route Definition: The route /person/:id captures the id parameter from the URL.
Accessing the Parameter: Use req.params.id to retrieve the ID.
Finding a Resource: The API searches through the persons array for a matching ID.
Response: Returns the person's details or a 404 error if not found. */


