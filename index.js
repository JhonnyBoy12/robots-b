


const express = require("express");

const app = express();

const port = 3002;

const {getRobots, getRobotsById, getRobotsBySeries} = require("./controllers/getrobots");

app.get("/", getRobots );

app.get("/id/:id", getRobotsById);

app.get("/series/:series", getRobotsBySeries);


app.listen(port, ()=>{
    console.log(`Corriendo ok en el puerto : ${port}`);
})