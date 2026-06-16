const degreeProgramRepository = require("../repositories/degreeProgramRepository");

exports.getAllDegreePrograms = (req, res) => {
    const degreePrograms = degreeProgramRepository.findAllDegreePrograms();

    res.json({
        degreePrograms: degreePrograms
    });
}
