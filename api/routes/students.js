const express = require("express");
const router = express.Router();

const studentController = require("../controller/studentController.js")

router.get("/",studentController.getAllStudents);
router.get("/:id",studentController.getStudentById);
router.post("/addStudent",studentController.addStudent);

module.exports = router;