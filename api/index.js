const express = require("express")
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("StudyManager API läuft!")
})

app.listen(PORT, () =>{
    console.log(`Server läuft auf http://localhost:${PORT} `)
})