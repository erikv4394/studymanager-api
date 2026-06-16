const database = require("../data/database.js");

exports.findAllDegreePrograms = () => {
    return database.degreePrograms;
}