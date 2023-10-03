const {
  create_user,
  login_user,
  get_data_for_jwt,
} = require("./methods/user_methods");
const { create_job, get_jobs } = require("./methods/job_methods");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

// setting the locations of the key.pem and cert.pem files
const options = {
  key: fs.readFileSync(path.join(__dirname, "./cert/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "./cert/cert.pem")),
};

require("dotenv").config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["https://127.0.0.1:5173", "https://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// authorization middleware
const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return res.status(403).send("Unauthorized.");
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = data.id;
    req.userEmail = data.email;
    req.userRole = data.userRole;
    return next();
  } catch {
    return res.status(403).send("Unauthorized.");
  }
};

app.post("/user/create", jsonParser, (req, res) => {
  create_user(req.body.email, req.body.role, req.body.password);
  res.send({ user: "created" });
});

app.post("/user/login", jsonParser, async (req, res) => {
  const is_correct_password = await login_user(
    req.body.email,
    req.body.password
  );
  if (is_correct_password) {
    const user_dict = await get_data_for_jwt(req.body.email);
    const token = jwt.sign(user_dict, process.env.JWT_SECRET_KEY);
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({ message: "Logged In Successfully" });
  } else {
    res.status(403).send("Incorrect Credentials");
  }
});

app.get("/protected", authorization, (req, res) => {
  res.send({ userId: req.userId });
});

app.get("/user/logout", authorization, (req, res) => {
  return res.clearCookie("access_token", {
    httpOnly: true,
    secure: true,
  });
});

app.post("/jobs/create", authorization, jsonParser, async (req, res) => {
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
    req.body.branches
  )
    .then(() => {
      res.status(200).send("Added Data");
    })
    .catch((error) => {
      console.log(error);
      res.status(401).send("Error");
    });
});

app.get("/jobs/get", authorization, jsonParser, async (req, res) => {
  res.send(await get_jobs());
})

const httpsServer = https.createServer(options, app);

httpsServer.listen(port, () => {
  console.log(`App listening on https://localhost:${port}`);
});
