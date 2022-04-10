const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./middleware/api'));

app.use('/', require('./middleware/html'));

const PORT = process.env.PORT || 3001;

//const { notes } = require('./db/db.json');

// app.get('/api/notes', (req, res) => {

//     let results = notes;

//     console.log(req.query)

//     res.json(results);
// });


app.listen(3001, () => {
    console.log(`Server listening at port ${PORT}`);
});