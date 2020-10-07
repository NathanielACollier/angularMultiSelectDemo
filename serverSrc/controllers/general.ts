import express = require('express');

export const generalController = express.Router();

generalController.get('/', (req,res)=>{
    res.status(200).json({message: 'You are at the general controller!'});
});