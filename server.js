const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;



router.get('/notes', (req, res) => {
    res.sendFile(getPath('notes'));
});


router.get('*', (req, res) => {
    res.sendFile(getPath('index'));
});

//const { notes } = require('./db/db.json');

// app.get('/api/notes', (req, res) => {

//     let results = notes;

//     console.log(req.query)

//     res.json(results);
// });


app.listen(3001, () => {
    console.log(`Server listening at port ${PORT}`);
});