const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");

const { login_user, update_password } = require("../methods/userMethods");
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

router.post("/update_password", authorization, jsonParser, async (req, res) => {
  const { password } = req.body;
  if (password) {
    const { entityId } = req;
    const response = await update_password(entityId, password);
    return res.status(response.status).send(response.message);
  } else {
    return res
      .status(400)
      .send('please send the new password in the body as {password: "abcde"}');
  }
});

module.exports = router;
