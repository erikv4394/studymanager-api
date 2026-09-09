const enrollmentRepository = require("../repositories/enrollmentRepository")
const studentRepository = require("../repositories/studentRepository")
const courseRepository = require ("../repositories/courseRepository")

exports.enrollStudent = (req, res) => {
    
    const studentId = Number(req.params.studentId);
    const courseId = Number(req.params.courseId)

    const student = studentRepository.findStudentById(studentId)

    if (!student) {
        return res.status(404).json({
            message: "Student with id " + studentId + "was not found"
        });
    }

    const course = courseRepository.getCourseById(courseId)

    if(!course) {
        return res.status(404).json({
            message: "Course with id " + courseId + " was not found"
        });
    }

    const enrollment = enrollmentRepository.enrollStudent(
        studentId,
        courseId,
        "ENROLLED"
    );

    return res.status(201).json({
        message: "Student successfully enrolled",
        enrollment
    });

}

exports.getStudentEnrollments = (req, res) => {
    const studentId = Number(req.params.studentId)

    const student = studentRepository.findStudentById(studentId)

    if (!student) {
        return res.status(404).json({
            message: "Student with id " + studentId + "was not found"
        });
    }

    const studentEnrollments = enrollmentRepository.getStudentsEnrollments(studentId)

    return res.json({
        enrollments: studentEnrollments
    })
}