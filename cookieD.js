const express = require("express");
const app = express();
const cp = require("cookie-parser");

//create----->res.cookie(key,value)
//read  ----->re1.cookies();   ,  res.cookies(key);
//update----->res.cookie(key,value)
//Delete----->res.cookie(key,value,{expires:time})
//res.cookie(key,value,{maxAge:time})
//res.clearCookie(key)


app.use(cp());
app.get("/", (req, res) => { 
    res.cookie("fname", "Darshil");
    res.cookie("lname", "Shiyani");
    res.cookie("lname", "Patel");
    res.cookie("division", "A8", {
        "expires": new Date(Date.now() + 5000)
    });
    res.cookie("rollno", 271, { "maxAge": 5000 })
    res.cookie("marks", 22);
    res.clearCookie("marks");    //Immdiatly Delete
    res.send(`<a href="/show">show cookies</a>`)
    app.get("/show", (req, res) => { 
        res.send(req.cookies);
    })
})

app.listen(3040)
