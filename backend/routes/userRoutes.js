const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");

const { create_user, login_user } = require("../methods/userMethods");
const { get_data_for_jwt } = require("../methods/authMethods");
const { authorization } = require("../middlewares/authorization");

router.get("/get_user_data", authorization, (req, res) => {
  res.send({
    userId: req.userId,
    userRole: req.userRole,
    userEmail: req.userEmail,
  });
});

router.get("/logout", authorization, (req, res) => {
  return res.clearCookie("access_token");
});

router.post("/create", jsonParser, async (req, res) => {
  const { email, role, password } = req.body;
  if (email && role && password) {
    const response = await create_user(
      req.body.email,
      req.body.role,
      req.body.password
    );
    return res.status(parseInt(response[0])).send(response[1]);
  } else {
    res
      .status(400)
      .send("either or all of email, role, password not in req body.");
  }
});

router.post("/login", jsonParser, async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const response = await login_user(email, password);
    if (parseInt(response[0]) === 200) {
      const user_dict = await get_data_for_jwt(req.body.email);
      const token = jwt.sign(user_dict, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      return res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "lax",
          maxAge: 604800000, // 7 days
        })
        .status(200)
        .json({ message: "Logged In Successfully" });
    } else {
      res.status(400).send("Incorrect Credentials");
    }
  } else {
    return res
      .status(400)
      .send("either or all of email, password not in req body.");
  }
});

module.exports = router;
