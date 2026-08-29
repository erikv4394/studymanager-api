const database = require("../data/database.js");

exports.addEnrollment = (studentId, courseId, status) => {
    const newEnrollment = {
        studentId: studentId,
        courseId: courseId,
        status: status
    }

    database.enroll

    return newEnrollment;
}