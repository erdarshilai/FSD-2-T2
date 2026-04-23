const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
    secret: '1120',

}));
app.get('/', (req, res) => {
    if (!req.session.visits) {
        req.session.visits = 1;
        res.send("welcome user for 1 st time")
    }
    else { 
        req.session.visits++;
        res.send(`You visited ${req.session.visits} times`)
    }

        
});
app.listen(3100);