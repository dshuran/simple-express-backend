const express = require('express')
const app = express()
const port = 3000

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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
