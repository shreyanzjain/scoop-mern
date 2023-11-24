const express = require("express");
const { create_admin } = require("../methods/adminMethods");
const router = express.Router();

create_admin("admin@admin.com", "ADMIN", "admin");

module.exports = router;