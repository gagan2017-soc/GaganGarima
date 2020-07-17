// const async = require("async");
const config = require("../Utilities/config").config;
const festivalcalDAO = require('../DAO/festivalcalDAO');
const MD5 = require('md5');
let festivalcal = require('../Models/festivalcal');

/* API to register new user */
let createfestivalcal = async (req, res) => {
  if (!req.body.festdt || !req.body.holidayname) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        festdt: req.body.festdt      } 
      const checktran = await festivalcalDAO.getfestivalcal(criteria);
      if (checktran && checktran.length==1) {
        res.status(401).json({message:'Transaction already Exists'})
      } else {
        let transdate = {
            festdt: req.body.festdt ? req.body.festdt : "",
            holidayname: req.body.holidayname ? req.body.holidayname : "",
        };
        const addTran = await festivalcalDAO.createfestivalcal(transdate);
        // console
        if (addTran) {
          res.status(200).json({message:'Transcation registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};

let updatefestivalcal = async (req, res) => {
  if (!req.body.festdt || !req.body.holidayname) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        festdt: req.body.festdt      } 
      const checktran = await festivalcalDAO.getfestivalcal(criteria);
      /* if (checktran && checktran.length==1) {
        res.status(401).json({message:'Transaction already Exists'})
      } else { */
        let transdate = {
            festdt: req.body.festdt ? req.body.festdt : "",
            holidayname: req.body.holidayname ? req.body.holidayname : "",
        };
        if (checktran && checktran.length==1) {
        const addTran = await festivalcalDAO.updatefestivalcal(criteria,transdate, {upsert: true} );
        // console
        if (addTran) {
          res.status(200).json({message:'Transcation registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};
let getAllfestivalcal = async (req, res) => {
    festivalcal.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      
    }
  })
} ;
  module.exports = {
    createfestivalcal: createfestivalcal,
    getAllfestivalcal: getAllfestivalcal,
    updatefestivalcal :updatefestivalcal
};

