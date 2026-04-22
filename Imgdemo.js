const express = require("express");
const app = express();

app.get("/", (req, res) => { 
    res.send(`<img src="1.jfif" alt="my image">`)
})
app.listen(3050)