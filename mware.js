const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About us</h1>");
});

app.listen(3077, "localhost", 150, () => {
    console.log("Server started at 3097");
});