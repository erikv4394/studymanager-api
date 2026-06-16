/***
 * REST API methoden
 * GET -> etwas holen
 * POST -> etwas erstellen
 * PUT -> etwas aktualisieren
 * DELETE -> etwas löschen 
 */

const express = require("express");
const router = express.Router();

const studentController = require("../controller/studentController.js")

router.get("/",studentController.getAllStudents);
router.get("/:id",studentController.getStudentById);
router.post("/",studentController.addStudent);
router.delete("/:id",studentController.deleteStudent);

module.exports = router;