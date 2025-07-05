const express = require('express');
const app = express()
const PORT = 8000;
const path = require('path')
const userRoute = require("./routes/userRoute")
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/blogify')
    .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render("home")
})

app.use('/users', userRoute)

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));