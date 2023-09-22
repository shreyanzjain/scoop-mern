var {create_user, login_user, get_data_for_jwt} = require('./methods/user_methods');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cookieParser());

// authorization middleware
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    if(!token) {
        return res.status(403).send("Unauthorized.");
    }
    try { 
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = data.id;
        req.userEmail = data.email;
        return next();
    }   catch {
        return res.status(403).send("Unauthorized.")
    }
}

app.post("/user/create", jsonParser, (req, res) => {
    create_user(req.body.email, req.body.role, req.body.password);
    res.send({user: "created"});
})

app.post("/user/login", jsonParser, async(req, res) => {
    const is_correct_password = await login_user(req.body.email, req.body.password);
    if(is_correct_password){
        const user_dict = await get_data_for_jwt(req.body.email);
        const token = jwt.sign(user_dict, process.env.JWT_SECRET_KEY);
        return res
        .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({message: "Logged In Successfully"});
    }   else {
        res.status(403).send("Incorrect Credentials");
    }
});

app.get("/protected", authorization, (req, res) => {
    res.send({userId: req.userId});
})

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`);
})