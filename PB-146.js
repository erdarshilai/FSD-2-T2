const express = require("express");
const app = express();
app.get("/home", (req, res) => { 
    res.send("<h1>welcome to my home page</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>welcome to my about page</h1>")
})
app.get("/contact", (req, res) => {
    res.send("<h1>welcome to my contact page</h1>")
})
app.get("/temp", (req, res) => {
    res.send("<h1>welcome to my temp page</h1>")
})
app.get(/\w*/, (req, res) => { 
    res.status(404).send("<h1 style='color:red'>Page Not Found</h1>");
})
app.listen(3021, "localhost", 150, () => {
    console.log("Server started at 3021");
});