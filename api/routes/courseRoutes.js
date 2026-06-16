const express = require("express")
const router = express.Router()

const coursesController = require("../controller/coursesController")

router.get("/", coursesController.getAllCourses);
module.exports = router