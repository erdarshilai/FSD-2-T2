const express = require("express");
const app = express();
var s = [{
        "name": "abc",
        "height": 150
    },
    {
        "name": "bbc",
        "height": 162
    },
    {
        "name": "cbc",
        "height": 157
    }]
app.get("/", (req, res) => { 
    res.send(s)
})
app.get("/sort", (req, res) => {
    var p = s.sort((a, b) => b.height - a.height);
    res.send(p);
})
app.listen(3056, "localhost", 150, () => {
    console.log("Server started at 3056");
});

