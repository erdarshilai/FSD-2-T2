const express = require("express");
const app = express();
app.use(express.static(__dirname, {
    index: "postd.html"
}));
app.use(express.urlencoded({
    extended: true
}));
app.post("/calc", (req, res) => {
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


});

app.listen(3030);