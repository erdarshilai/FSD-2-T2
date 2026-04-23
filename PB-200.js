const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname, {
    index: "PB-200.html"
}));
app.use(express.urlencoded({
    extended: true
}));
app.get("/submit", (req, res) => { 
    var { un, email, msg, r } = req.query;
    var f = { un, email, msg, r };
    res.cookie("feedback", f, { maxAge: 10000 });
    res.send(`Feedback submitted succesfully <a href="/show">Show Feedback</a>`)
})
app.get('/show', (req, res) => {
    
    res.send(`username: ${req.cookies.feedback.un} <br> 
            email: ${req.cookies.feedback.email} <br>
            message: ${req.cookies.feedback.msg} <br>
            rating: ${req.cookies.feedback.r} <br>
            <a href="/">logout</a>
            `)
});
app.listen(4040);