const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    { id: 0, name: 'Shaiontika', email: 'shaiontika@gmail.com', phone: 01511111110 },
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: 01511111111 },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: 01511111112 },
    { id: 3, name: 'Sraboni', email: 'Sraboni@gmail.com', phone: 01511111113 },
    { id: 4, name: 'Sarika', email: 'sarika@gmail.com', phone: 01511111114 },
    { id: 5, name: 'Suba', email: 'suba@gmail.com', phone: 01511111115 },
    { id: 6, name: 'Susmita', email: 'susmita@gmail.com', phone: 01511111116 }
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

//app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    const id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.send('Inside post');
});

app.listen(port, () => {
    console.log('Listing to Port', port)
});