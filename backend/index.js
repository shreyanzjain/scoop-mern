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
        res.send(is_correct_password);
    }
});

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`);
})