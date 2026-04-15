const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="get" action="/search">
        NAME:<input type="text" name="q"><br>
        MOBILE_NO:<input type="number" name="s"><br>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>`)
    
   
});

app.get("/search", (req, res) => {
    res.send(`You searched for Name ${req.query.q} and mobile no of ${req.query.q} is ${req.query.s}`);
    console.log(req.query);
});

app.listen(3088, "localhost", 150, () => {
    console.log("Server started at 3097");
});