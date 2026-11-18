
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());



const users = [{  name: 'Sajib Mia', email: 'sajibmia@gmail.com' }];


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    users.push(req.body);
    res.status(201).send('User created');
})
