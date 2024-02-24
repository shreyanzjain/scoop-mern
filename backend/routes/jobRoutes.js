const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authorization } = require("../middlewares/authorization");
const {
  create_job,
  get_jobs,
  get_job_by_id,
  get_jobs_by_branch,
  applyById,
} = require("../methods/jobMethods");

// middleware to check if the user is actually an admin
const adminCheck = (req, res, next) => {
  const entityRole = req.entityRole;
  if (entityRole === "ADMIN") {
    next();
  } else {
    return res.status(403).send("Unauthorized.");
  }
};

const studentCheck = (req, res, next) => {
  const entityRole = req.entityRole;
  if (entityRole === "STUDENT") {
    next();
  } else {
    return res.status(403).send("Unauthorized.");
  }
};

router.put("/apply", authorization, studentCheck, async (req, res) => {
  const id = parseInt(req.query.id);
  const response = await applyById(id, req.entityId);
  console.log(response);
  return res.status(response.status).send({ message: response.message });
});

router.get("/get", authorization, jsonParser, async (req, res) => {
  const id = parseInt(req.query.id);
  if (!id) {
    res.send(await get_jobs());
  } else {
    const response = await get_job_by_id(id);
    return res.status(response.status).send(response.data);
  }
});

router.get("/get_by_branch", authorization, jsonParser, async (req, res) => {
  const branch = req.query.branch;
  res.send(await get_jobs_by_branch(branch));
});

router.post(
  "/create",
  authorization,
  adminCheck,
  jsonParser,
  async (req, res) => {
    const {
      company,
      job_role,
      job_description,
      salary,
      status,
      location,
      cgpa_cutoff,
      tenth,
      twelfth,
      kt_allowed,
      drop_allowed_ug,
      branches,
    } = req.body;
    if (
      company &&
      job_role &&
      job_description &&
      salary &&
      status &&
      location &&
      cgpa_cutoff &&
      tenth &&
      twelfth
    ) {
      const job = await create_job(
        company,
        job_role,
        job_description,
        salary,
        status,
        location,
        cgpa_cutoff,
        tenth,
        twelfth,
        kt_allowed,
        drop_allowed_ug,
        branches != undefined ? branches : ["ALL"]
      )
        .then(() => {
          res.status(200).send("Added Data");
        })
        .catch((error) => {
          console.log(error.message);
          res.status(400).send("Error");
        });
    } else {
      res
        .status(400)
        .send(
          "company,job_role,job_description,salary,status,location,cgpa_cutoff,tenth,twelfth,kt_allowed,drop_allowed_ug,branches, not in req body"
        );
    }
  }
);

module.exports = router;
