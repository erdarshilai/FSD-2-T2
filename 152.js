const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="get" action="/search">
        TEXTAREA:<textarea name="no"></textarea><br>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>`)
    
});


app.get("/search", (req, res) => {
    a = req.query.no.split(".");
    b = a.join("<br>");
    res.send(b)
});

app.listen(3077, "localhost", 150, () => {
    console.log("Server started at 3097");
});