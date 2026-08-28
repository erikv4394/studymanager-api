const express = require("express");

const courseController = require("../controller/coursesController");

const router = express.Router();


router.get("/", courseController.getAllCourses);



router.get("/:id", courseController.getCourseById);


router.post("/", courseController.addCourse);



router.put("/:id", courseController.updateCourse);


router.delete("/:id", courseController.deleteCourse);



router.get(
    "/degree-program/:degreeProgramID",
    courseController.getCoursesByDegreeProgram
);


module.exports = router;
