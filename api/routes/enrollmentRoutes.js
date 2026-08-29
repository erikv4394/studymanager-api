const express = require("express");

const enrollmentController = require("../controllers/enrollmentController");

const router = express.Router();


router.post(
    "/students/:studentId/courses/:courseId/enroll",
    enrollmentController.enrollStudent
);


module.exports = router;

