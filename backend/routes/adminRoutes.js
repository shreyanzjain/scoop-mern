const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { create_admin } = require("../methods/adminMethods");
const { authorization } = require("../middlewares/authorization");


create_admin("admin@admin.com", "ADMIN", "admin");

router.post("/register_admin", authorization, async (req, res) => {
  // if the user is a admin then
  if (req.entityRole == "ADMIN") {
    const { email, password } = req.body;
    if (email && password) {
      create_admin(email, "ADMIN", password);
    } else {
      return res
        .status(400)
        .send("either or all of email, passoword not in req body");
    }
  } else {
    return res.status(403).send("Unauthorized.");
  }
});

router.post(
  "/register_student",
  authorization,
  jsonParser,
  async (req, res) => {
    if (req.entityRole === "ADMIN") {
      const { email, password } = req.body;
      if (email && password) {
        const response = await create_user(email, "STUDENT", password);
        return res.status(parseInt(response[0])).send(response[1]);
      } else {
        res
          .status(400)
          .send("either or all of email, password not in req body.");
      }
    } else {
      return res.status(403).send("Unauthorised.");
    }
  }
);

router.post("/register_envoy", authorization, jsonParser, async (req, res) => {
  if (req.entityEmail === "ADMIN") {
    const { email, password } = req.body;
    if (email && password) {
      const response = await create_user(email, "ENVOY", password);
      return res.status(parseInt(response[0])).send(response[1]);
    } else {
      res.status(400).send("either or all of email, password not in req body.");
    }
  } else {
    res.status(403).send("Unauthorized.");
  }
});

module.exports = router;
