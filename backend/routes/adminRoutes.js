const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const nodemailer = require("nodemailer");
//const path = require("path");
const fs = require("fs");
const multer = require("multer");
const csv = require("fast-csv");
// modules required (MAYBE) to implement sending emails out
const csvFilter = (req, file, cb) => {
  if (file.mimetype === "text/csv") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ dest: "public", fileFilter: csvFilter });

const { create_admin } = require("../methods/adminMethods");
const { create_user } = require("../methods/userMethods");
const { authorization } = require("../middlewares/authorization");

// create an admin user on the first run
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
  if (req.entityRole === "ADMIN") {
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

router.post(
  "/bulk_register_student",
  authorization,
  (req, res, next) => {
    if (req.entityRole === "ADMIN") {
      next();
    } else {
      return res.status(403).send("Unauthorized.");
    }
  },
  jsonParser,
  upload.single("file_field"),
  async (req, res) => {
    const oldPath = `public/${req.file.filename}`;
    const newPath = `public/${req.file.filename.slice(0, 8)}_${
      req.entityId
    }.csv`;
    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log(`File uploaded @ ${newPath} by ${req.entityEmail}`);
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "",
      },
    });

    const mailOptions = (email, password) => {
      const options = {
        from: "scoop.pms@gmail.com",
        to: email,
        subject: "Your scoop credentials",
        html: `<h4>Your password is: </h4><br/><p>${password}</p>`,
      };
      return options;
    };

    csv
      .parseFile(newPath, {
        headers: true,
      })
      .on("error", (err) => console.log(err))
      .on("data", async (row) => {
        const res = await create_user(row.email, "STUDENT", row.password);
        // const info = await transporter.sendMail(
        //   mailOptions(row.email, row.password)
        // );
        // console.log(info.messageId);
        console.log(res);
      })
      .on("end", (rowCount) => console.log(`Rows: ${rowCount}`));
    return res.status(200).send(req.file);
  }
);

module.exports = router;
