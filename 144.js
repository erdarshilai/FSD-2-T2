const express = require("express");
const app = express();

app.use(express.urlencoded({
    "extended": true
}));


app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="post" action="/check">
        USERNAME:<input type="text" name="username"><br>
        Password:<input type="password" name="password"><br>
        <input type="submit" value="check">
        </form>
        </body>
        </html>`)


});

app.post("/check", (req, res, next) => {
    if (req.body.username.toLowerCase() == "admin") {
        next();
    } else {
        res.send('<h1 style="color:red">Warning : INVALID USER</h1>')
    }

});

app.post("/check", (req, res, next) => {
    res.send(`<h1>welcome...admin</h1>`);
    next();
})

app.post("/check", (req, res) => {

});

app.listen(3111, "localhost", 150, () => {
    console.log("Start");
});