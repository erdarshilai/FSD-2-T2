const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})
app.get("/:day", (req, res) => {
    res.send(`today is ${req.params.day}`);
})


app.listen(3034, "localhost", 150, () => {
    console.log("Server started at 3056");
});