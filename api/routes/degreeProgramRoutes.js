const express = require("express");
const router = express.Router();

const degreeProgramController = require("../controller/degreeProgramController")

router.get("/", degreeProgramController.getAllDegreePrograms);

module.exports = router