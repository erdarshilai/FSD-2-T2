const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname, {
    index: "postd.html"
}));
app.use(express.urlencoded({
    extended: true
}));
app.post("/calc", (req, res) => {

    var n1 = req.body.no1
    var n2 = req.body.no2
    var op = req.body.sele;
    if (n1 < 0 || n2 < 0) {
        res.send("Numbers must be positive")
    } else if (!op) {
        res.send("Select 1 operation");
    } else {
        res.cookie("number1", n1, {
            maxAge: 50000
        });
        res.cookie("number2", n2, {
            maxAge: 50000
        });
        n1 = req.cookies.number1
        n2 = req.cookies.number2
        var n1 = parseInt(req.body.no1);
        var n2 = parseInt(req.body.no2);
        var op = req.body.sele;
        if (op == "Add")
            res.send(`Addition is ${n1 + n2}`)
        else if (op == "Sub")
            res.send(`substraction is ${n1 - n2}`)
        else if (op == "Mul")
            res.send(`multiplication is ${n1 * n2}`)
        else
            res.send(`Division is ${n1 / n2}`)
    }
});

app.listen(3020)