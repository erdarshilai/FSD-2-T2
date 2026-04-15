const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})

app.get("/day/:day", (req, res) => {
    res.send(`today is ${req.params.day}`);
});

app.get("/month/:month", (req, res) => {
    res.send(`Current Month is ${req.params.month}`);
});

app.get("/day/:d/month/:m", (req, res) => {
    res.send(`today is ${req.params.d} of month ${req.params.m}`);
});

app.get(/\w*/, (req, res) => {
    res.status(404).send("<h1 style='color:red'>Page Not Found</h1>");
})

app.listen(3034, "localhost", 150, () => {
    console.log("Server started at 3056");
});