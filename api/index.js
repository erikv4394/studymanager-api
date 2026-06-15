const express = require("express")
const app = express();
const PORT = 3000;

const studentRoutes = require("./routes/students.js")
const courseRoutes = require("./routes/courses.js")

app.use(express.json())

app.use("/students", studentRoutes)
app.use("/courses", courseRoutes)

app.get("/", (req, res) => {
    res.send("StudyManager API läuft!")
})

app.listen(PORT, () =>{
    console.log(`Server läuft auf http://localhost:${PORT} `)
})