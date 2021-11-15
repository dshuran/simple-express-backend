const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
    Хранит объекты со свойствами id и title
 */
const tasks = [];

app.get('/tasks/:id', (req, res) => {
    let result = tasks.find((task) => {
        return task.id === req.params.id
    })

    if (result) {
        res.send(`Task id = ${result.id}\n Task title = ${result.title}`)
    } else {
        res.send('Task not found!')
    }
})

app.post('/addtask',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    tasks.push(request.body);
    response.send('Task added');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
