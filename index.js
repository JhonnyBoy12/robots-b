


const express = require("express");

const app = express();

const port = 3002;

const {getRobots, getRobotsById} = require("./controllers/getrobots");

app.get("/", getRobots );

app.get("/:id", getRobotsById)


app.listen(port, ()=>{
    console.log(`Corriendo ok en el puerto : ${port}`);
})