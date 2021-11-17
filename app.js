const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const path = require('path')
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Данные о записях, которые пользователи сделали. Используем вместо БД для простоты.
const entries = [];

app.get('/entries/:id', (req, res) => {
    let result = entries.find((entry) => {
        console.log(`id = ${req.params.id} entry id = ${entry.id}`)
        return entry.id.toString() === req.params.id.toString()
    })

    if (result) {
        res.send(result);
    } else {
        res.status(404);
        res.send('Could not find entry!');
    }
})

app.post('/entries/add',(request,response) => {
    // TODO: Some data validation
    const entry = {
        username: request.body.username,
        entryDate: request.body['entry-date'],
        id: entries.length
    }

    entries.push(entry);

    response.send(`Added entry id = ${entry.id}`);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
