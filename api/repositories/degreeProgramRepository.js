const database = require("../data/database.js");

exports.findAllDegreePrograms = () => {
    return database.degreePrograms;
}

exports.addNewDegreePrograms = (name,totalEcts) => {
    const newId = database.students.length > 0
            ? Math.max(...database.students.map(student => student.id)) + 1
            : 1;

    const newDegreeProgram = {
        id: newId,
        name: name,
        totalEcts: totalEcts
    };

    database.degreePrograms.push(newDegreeProgram)

    return newDegreeProgram;
}

exports.deleteDegreeProgramm = (id) => {
    const degreeProgramIndex = database.degreePrograms.findIndex(degreeProgram => degreeProgram.id === id);

    if(degreeProgramIndex === -1) {
        return null
    }

    const deletedDegreeProgram = database.degreePrograms[degreeProgramIndex];

    database.degreePrograms.splice(degreeProgramIndex, 1);

    return deletedDegreeProgram
}
