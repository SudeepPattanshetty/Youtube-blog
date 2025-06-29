const express = require('express');
const app = express()
const PORT = 8000;
const path = require('path')

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.get('/', (req, res) => {
    res.render("home")
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));