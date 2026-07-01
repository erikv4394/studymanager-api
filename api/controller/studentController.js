const studentRepository = require("../repositories/studentRepository");

exports.getAllStudents = (req, res) => {
    const students = studentRepository.findAllStudents();

    res.json({
        students: students
    });
};

exports.getStudentById = (req, res) => {
    const id = Number(req.params.id);

    const actualStudent = studentRepository.findStudentById(id);

    if (!actualStudent) {
        return res.status(404).json({
            message: "Student with id: " + id + " was not found"
        });
    }

    res.json({
        student: actualStudent
    });
};

exports.addStudent = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    if (!firstName || !lastName) {
        return res.status(400).json({
            message: "firstName and lastName are required"
        });
    }

    const newStudent = studentRepository.addStudent(firstName, lastName);

    res.status(201).json({
        message: "Student was created successfully",
        student: newStudent
    });
};

exports.deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const deletedStudent = studentRepository.deleteStudent(id);

    if (!deletedStudent) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json({
        message: deletedStudent.firstName + " " + deletedStudent.lastName + " was removed",
        student: deletedStudent,
        students: studentRepository.findAllStudents()
    });
};

exports.getStudentDegreeProgramm = (req, res) => {
    const studentId = Number(req.params.id)
    const degreeProgram = studentRepository.getStudentDegreeProgramm(studentId)

    res.json({
        degreeProgram
    })
}

