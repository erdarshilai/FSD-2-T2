const express = require("express");
const app = express();

app.get("/student/:name", (req, res) => {
    res.send(`Student name is  ${req.params.name}`);
});

app.get("/student/:n/course/:c/", (req, res) => {
    res.send(`Student ${req.params.n} is enrolled in course ${req.params.c}`);
});

app.get(/\w*/, (req, res) => {
    res.status(404).send("<h1 style='color:red'>Page Not Found</h1>");
})

app.listen(3007, "localhost", 150, () => {
    console.log("Server started at 3007");
});