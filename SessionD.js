const express = require("express");
const app = express();
const session = require("express-session")
app.use(session({
    secret: "1120",
    resave: false,
    saveUninitialized:false,
    cookie: {maxAge:15000}
}))
app.get("/", (req, res) => { 
    req.session.user = "Darshil";
    req.session.rollno = "07";
    req.session.marks = 20;
    res.redirect("/show");
})
app.get("/show", (req, res) => {
    res.send(`user:${req.session.user} <br>
        rollno: ${
            req.session.rollno
        }<br>
        marks: ${
            req.session.marks
        }
            <a href="/delete"> delete</a>

        `);

});
app.get("/delete", (req, res) => { 
    req.session.destroy();
    if (req.session)
        res.send(`user : ${req.session.user}`)
    else
        res.send("session destroyed")

})

app.listen(4020)