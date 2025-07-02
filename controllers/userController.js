const User = require('./models/userSchema')

async function handleSigIn(req, res) {
    return res.render("signin");
}
async function handleSigUp(req, res) {
    return res.render("signup");
}

async function handlePostSignIn(req, res) {
}