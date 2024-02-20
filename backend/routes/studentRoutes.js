const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authorization } = require("../middlewares/authorization");
const { get_profile, update_profile } = require("../methods/studentMethods");

const studentCheck = (req, res, next) => {
  const entityRole = req.entityRole;
  if (req.entityRole == "STUDENT") {
    return next();
  } else {
    console.log("here");
    return res.status(403).send("Unauthorized");
  }
};

router.get("/profile", authorization, studentCheck, async (req, res) => {
  const entityId = req.entityId;
  const profile = await get_profile(entityId);
  return res.status(200).send(profile);
});

router.post(
  "/profile",
  authorization,
  studentCheck,
  jsonParser,
  async (req, res) => {
    const {
      student_name,
      dob,
      phone,
      phone_alt,
      branch,
      cgpa,
      sem_1,
      sem_2,
      sem_3,
      sem_4,
      sem_5,
      sem_6,
      tenth,
      twelfth,
      kt,
      linkedin,
      leetcode,
      codechef,
      codeforces,
      verified,
    } = req.body;
    const entityId = req.entityId;
    const response = await update_profile(
      entityId,
      student_name,
      dob,
      phone,
      phone_alt,
      branch,
      cgpa,
      sem_1,
      sem_2,
      sem_3,
      sem_4,
      sem_5,
      sem_6,
      tenth,
      twelfth,
      kt,
      linkedin,
      leetcode,
      codechef,
      codeforces,
      verified
    );
    return res.status(response.status).send(response.message);
  }
);

module.exports = router;
