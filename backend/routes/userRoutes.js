const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");

const { login_user } = require("../methods/userMethods");
const { get_data_for_jwt } = require("../methods/authMethods");
const { authorization } = require("../middlewares/authorization");

router.get("/auth_test", authorization, (req, res) => {
  res.send({
    entityId: req.entityId,
    entityRole: req.entityRole,
    entityEmail: req.entityEmail,
  });
});

router.get("/logout", authorization, (req, res) => {
  return res.clearCookie("access_token").status(200).send("Logged Out.");
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
        .send(user_dict);
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
