const degreeProgramRepository = require("../repositories/degreeProgramRepository");

exports.getAllDegreePrograms = (req, res) => {
    const degreePrograms = degreeProgramRepository.findAllDegreePrograms();

    res.json({
        degreePrograms: degreePrograms
    });
}

exports.addNewDegreePrograms = (req, res) => {
    const name = req.body.name
    const totalEcts = req.body.totalEcts

    if (!name || !totalEcts) {
        return res.status(400).json({
            message: "Name or totalEcts are missing"
        })
    }

    const newDegreeProgram = degreeProgramRepository.addNewDegreePrograms(name, totalEcts);

    const degreePrograms = degreeProgramRepository.findAllDegreePrograms();

    res.json({
        DegreePrograms : degreePrograms
    })
}

exports.deleteDegreeProgram = (req, res) => {
    const id = Number(req.params.id)
    const deletedDegreeProgram = degreeProgramRepository.deleteDegreeProgramm(id);
    const degreePrograms = degreeProgramRepository.findAllDegreePrograms();

    res.json({
        DegreePrograms: degreePrograms
    })

}