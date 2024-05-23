const {request, response} = require("express");


const { robots } = require("../robots");

const getRobots = (req= request, res= response)=>{
    res.json({
        status:true,
        robots,
        statuscode:200
    });
}

const getRobotsById = (req= request, res= response)=>{

    let id = (req.params.id);

    let robotS = "";
    robotS = robots.find( ( robot )=>{
        return robot.id === id;

    });
    if (robotS){
        return res.json({
            ok:true,
            robotS,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"no hay robot",
            statusCode:404
        });
    }

}


const getRobotsBySeries = (req= request, res= response)=>{

    let series = parseInt (req.params.series);

    let robotS = "";
    robotS = robots.filter( ( robot )=>{
        return robot.series === series;

    });
    if (robotS){
        return res.json({
            ok:true,
            robotS,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"no hay robot",
            statusCode:404
        });
    }

}

module.exports = {
    getRobots,
    getRobotsById,
    getRobotsBySeries
}