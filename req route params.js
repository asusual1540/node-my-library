console.log("app started")
const express = require("express")
const url = require("url")

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello Express</h1>")
})

app.get('/name', (req, res) => {
    res.status(200).send("<h1>Hello 2nd route</h1>")
})

app.get('/api/:name', (req, res) => {
    var name = req.params.name
    var info = url.parse(req.url).query.split("&")
    res.status(200).send(`<h1>Hello ${info[1]} ${info[0]} ${info[2]}</h1>`)
})

app.listen(3000, () => {
    console.log("app running on port 3000")
})

console.log("app running")