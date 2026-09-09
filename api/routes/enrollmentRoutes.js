const express = require("express");

const enrollmentController = require("../controller/enrollmentController");

const router = express.Router();


router.post(
    "/students/:studentId/courses/:courseId/enroll",
    enrollmentController.enrollStudent
);

router.get("/students/:studentId/enrollments", enrollmentController.getStudentEnrollments)


module.exports = router;

