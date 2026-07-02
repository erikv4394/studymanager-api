const express = require("express");
const router = express.Router();

const degreeProgramController = require("../controller/degreeProgramController")

router.get("/", degreeProgramController.getAllDegreePrograms);
router.get("/:id", degreeProgramController.getDegreeProgramById);
router.post("/", degreeProgramController.addNewDegreePrograms);
router.delete("/:id", degreeProgramController.deleteDegreeProgram);

module.exports = router