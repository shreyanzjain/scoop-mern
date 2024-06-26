const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authorization } = require("../middlewares/authorization");
const {
  get_profile,
  update_profile,
  get_students,
  get_student,
  verify_student,
} = require("../methods/studentMethods");

const studentCheck = (req, res, next) => {
  const entityRole = req.entityRole;
  if (entityRole == "STUDENT") {
    return next();
  } else {
    return res.status(403).send("Unauthorized");
  }
};

router.get("/profile", authorization, studentCheck, async (req, res) => {
  const entityId = req.entityId;
  const profile = await get_profile(entityId);
  return res.status(200).send(profile);
});

router.get("/get", authorization, async (req, res) => {
  if (req.entityRole == "ADMIN" || req.entityRole == "ENVOY") {
    const id = parseInt(req.query.id);
    if (id) {
      const response = await get_student(id);
      return res
        .status(response.status)
        .send({ data: response.data, message: response.message });
    } else {
      return res.status(400).send("send id in query params");
    }
  } else {
    return res.status(400).send("Unauthorized");
  }
});

router.get("/all", authorization, async (req, res) => {
  if (req.entityRole == "ADMIN" || req.entityRole == "ENVOY") {
    const response = await get_students();
    return res.status(response.status).send(response.data);
  } else {
    return res.status(403).send("Unauthorized");
  }
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

router.post("/verify", authorization, async (req, res) => {
  if (req.entityRole == "ADMIN" || req.entityRole == "ENVOY") {
    const id = parseInt(req.query.id);
    if (id) {
      const response = await verify_student(id);
      return res.status(response.status).send(response.message);
    } else {
      return res.status(400).send("Send id as a query param :(");
    }
  } else {
    return res.status(403).send("Unauthorized.");
  }
});

module.exports = router;
