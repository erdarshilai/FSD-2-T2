const express = require("express");
const app = express();

var count = 0;

app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="get" action="/login">
        USERNAME:<input type="text" name="username"><br>
        Password:<input type="password" name="password"><br>
        Message: <textarea name = "mess"></textarea><br>
        <input type="submit" value="check">
        </form>
        </body>
        </html>`)
});

var savem = "";

app.get("/login", (req, res) => { 
    savem = req.query.mess;
    res.send(`USERNAME:${req.query.username}<br>
            PASSWORD:${req.query.password}<br>
            MESSAGE:${req.query.mess}<br>
            <a href="/message">show vowel</a>`)
})

function f1(req, res, next) { 
    var arr = savem.split("");
    for (i = 0; i < arr.length; i++) { 
        if (arr[i] == "a" || arr[i] == "i" || arr[i] == "e" || arr[i] == "o" || arr[i] == "u") { 
            count++;
        }
    }
    next();
}
app.get("/message",f1, (req, res) => { 
    res.send(`no of Vowels is: ${count}`)

})

app.listen(3117, "localhost", 150, () => {
    console.log("Server started at 3117");
});
