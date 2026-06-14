let students = [
    { firstName: "John", lastName: "Smith", id: 1 },
    { firstName: "Emma", lastName: "Johnson", id: 2 },
    { firstName: "Michael", lastName: "Brown", id: 3 },
    { firstName: "Olivia", lastName: "Davis", id: 4 },
    { firstName: "Erik", lastName: "Vasquez", id: 5 }
];

exports.getAllStudents = (req, res) => {
    res.json(students);
};

exports.getStudentById = (req,res) => {
    const id = req.params.id;
    let studentX;

    for (let i = 0; i< students.length; i++) {
        if (students[i].id == id) {
            studentX = students[i]
        }
    }
    res.json(studentX.firstName + " " + studentX.lastName)
}

exports.addStudent = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const newStudent = {
        id: students.length + 1,
        firstName: firstName,
        lastName: lastName
    }

    students.push(newStudent);

    res.json(newStudent)
}