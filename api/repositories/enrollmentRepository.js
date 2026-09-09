const database = require("../data/database.js");

exports.enrollStudent = (studentId, courseId, status) => {
    const newEnrollment = {
        studentId: studentId,
        courseId: courseId,
        status: status
    }

    database.enrollments.push(newEnrollment);

    return newEnrollment;
}

exports.getStudentsEnrollments = (studentId) => {
    const enrollments = database.enrollments;
    const courses = database.courses;

    const studentEnrollments = enrollments.filter(
        (enrollment) => enrollment.studentId == studentId
    )

    const studentCoursesId = studentEnrollments.map(
        (enrollment) => enrollment.courseId
    );

    const studentCourses = courses.filter((course) =>
        studentCoursesId.includes(course.id)
    );

    return studentCourses
    
}