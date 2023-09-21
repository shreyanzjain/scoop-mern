var {create_user, login_user} = require('./methods/user_methods');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.post("/user/create", jsonParser, (req, res) => {
    create_user(req.body.email, req.body.role, req.body.password);
    res.send({user: "created"});
})

app.post("/user/login", jsonParser, (req, res) => {
    login_user(req.body.email, req.body.password);
    res.send({"bye": "bye"});
})

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`);
})