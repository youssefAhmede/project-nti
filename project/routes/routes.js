const express = require('express')
const router = express.Router();
var projectModel = require('../src/project/projectModel');
router.post('/project/create',async(req,res)=>{
    const project = new projectModel(req.body)
    try{
        await project.save();
        res.statues(201).send({
            "status":true,
            "message":"project created"
        })
    }catch(error){
        res.statues(400).send(error);
    }
})