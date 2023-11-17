const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authorization } = require("../middlewares/authorization");
const { create_job, get_jobs } = require("../methods/jobMethods");

router.get("/get", authorization, jsonParser, async (req, res) => {
  res.send(await get_jobs());
});

router.post("/create", authorization, jsonParser, async (req, res) => {
  await create_job(
    req.body.company,
    req.body.job_role,
    req.body.job_description,
    req.body.salary,
    req.body.status,
    req.body.location,
    req.body.cgpa_cutoff,
    req.body.tenth,
    req.body.twelfth,
    req.body.kt_allowed,
    req.body.drop_allowed_ug,
    req.body.branches != undefined ? req.body.branches : ["ALL"]
  )
    .then(() => {
      res.status(200).send("Added Data");
    })
    .catch((error) => {
      console.log(error);
      res.status(401).send("Error");
    });
});

module.exports = router;
