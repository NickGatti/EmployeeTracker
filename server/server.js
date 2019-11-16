const express = require("express");
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const { selectAll } = require('./db/index.js')

app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/allPeople', (req, res) => {
    selectAll((err, people) => {
        if (err) {
            res.status(500).end(err)
        } else {
            res.json(people)
        }
    })
})

app.listen(port, function () {
    console.log('Listening on', port);
});