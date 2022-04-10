const express = require('express');
const path = require('path');


const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('api/notes', require('./middleware/api'));

app.use('/', require('./middleware/index'));

const PORT = process.env.PORT || 3001;



app.listen(3001, () => {
    console.log(`Server listening at port ${PORT}`);
});