const database = require("../data/database")

exports.getAllCourses = (req, res) => {
    const courses = database.courses

    if(courses.length == 0) {
        return res.status(400).json({
            message: "not courses availabe"
        })
    }
    res.json({
        courses: database.courses
    })
}