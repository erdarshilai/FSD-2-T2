// Express- Frame work of Node
const express = require("express");
const app = express();
app.get("/", (req, res) => { 
    // res.set("content-type", "text/html");
    // res.write("<h1>Hello World</h1>");
    // res.send();
    var s = { "name": "Drash", "age": 30 };
    //res.send("<h1>Hello World</h1>");
    res.send(s);
})
app.listen(3002,"localhost", 150, () => {
    console.log("Server started at 3002");
});
