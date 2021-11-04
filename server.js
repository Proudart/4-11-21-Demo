const express = require("express")
const app = express();

app.get("/", (req,res) => {
    res.sendFile("index.html", {root: __dirname})
}) 
app.get("/gmail", (req,res) => {
    res.send("Hellos")
}) 
app.listen(3006, () =>
    console.log("listening")
)