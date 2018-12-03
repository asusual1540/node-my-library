console.log("app started")

const ejs = require("ejs")
const express = require("express")
const app = express()
app.set("view engine", ejs)

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const Mongoose = require("mongoose")
Mongoose.connect(
    'mongodb://adnan:adnan123@ds215208.mlab.com:15208/my_library',
    { useNewUrlParser: true }
)
var bookStr = new Mongoose.Schema({
    name: String,
    author: String
})
var Book = Mongoose.model("Book", bookStr)

app.get('/', (req, res) => {
    Book.find().then(book => {
        res.render("my_library.ejs", {
            book: book
        })
    })
})

app.post('/add_book', (req, res) => {
    var new_book = new Book({
        name: req.body.name,
        author: req.body.author
    })
    Book.create(new_book, (error, newly_created_book) => {
        if (error) console.log(error)
        else console.log(newly_created_book)
    })

    res.redirect("/")
})

app.get("/delete_book/:id", (req, res) => {
    var id = req.params.id
    Book.findByIdAndRemove({ _id: id })
        .then(result => {
            res.redirect("/")
        })
})

app.listen(3000, () => {
    console.log("app running on port 3000")
})
