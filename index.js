const express = require('express');
const app = express()
const PORT = 8000;
const path = require('path')
const userRoute = require("./routes/userRoute")
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

mongoose
    .connect('mongodb://localhost:27017/blogify')
    .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))

app.get('/', (req, res) => {
    res.render("home", {
        user: req.user,
    })
})

app.use('/users', userRoute)

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));