var {create_user} = require('./methods/user_methods');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const express = require('express');

const app = express();
const port = 3000;

app.post("/user/create", jsonParser, (req, res) => {
    create_user(req.body.email, req.body.role, req.body.hashed_password);
    res.send({user: "created"});
})

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`);
})