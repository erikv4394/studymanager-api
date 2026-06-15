
const database = require("../data/database")


exports.getAllStudents = (req, res) => {
    res.json({
        students: database.students
    });
};

exports.getStudentById = (req,res) => {
    const id = Number(req.params.id);
    const actuallStudent = database.students.find(student => student.id === id);

    if (!actuallStudent) {
        return res.status(404).json({
            message: "Student with id: " + id + " was not found"
        })
    }
    
    res.json({
        student: actuallStudent.firstName + " " + actuallStudent.lastName
    })
}

exports.addStudent = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const newStudent = {
        id: database.students.length + 1,
        firstName: firstName,
        lastName: lastName
    }

    database.students.push(newStudent);

    res.json(newStudent)
}

exports.deleteStudent = (req,res) => {
    const id = Number(req.params.id) // Number() turns id into a real Number
    const actualStudent = database.students.find(student => student.id === id);

    if (!actualStudent) {
        return res.status(404).json({
            message : "Studen not found" // message sendet message an frontend bzw postman  kann man selst auswöhlen 
        })
    }

    database.students = database.students.filter(student => student.id !== id);

    res.json({
        message: actualStudent.firstName + " " + actualStudent.lastName + " was removed",
        students: database.students
    })
}