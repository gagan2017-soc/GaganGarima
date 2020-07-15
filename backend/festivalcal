"use strict";

var Models = require("../Models/festivalcal");

const getfestivalcal = criteria =>
  new Promise((resolve, reject) => {
    Models.find(criteria)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

const createfestivalcal = objToSave =>
  new Promise((resolve, reject) => {
    new Models(objToSave)
      .save()
      .then(client => resolve(client))
      .catch(err => {reject(err);
         console.log(err);
      });
  });

const updatefestivalcal = (criteria, dataToSet, options) =>
  new Promise((resolve, reject) => {
    options.lean = true;
    options.new = true;
    Models.findOneAndUpdate(criteria, dataToSet, options)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

const deletefestivalcal = criteria =>
  new Promise((resolve, reject) => {
    Models.findOneAndRemove(criteria)
      .exec()
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

/*   const getUser=
  new Promise((resolve, reject) => {
    Models.find((error,data))
      .exec()
      .then(client => resolve(client))
      .catch(err => reject(err));
  }); */

 /* const getUser=
  new promise((req, res) => {
    Models.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }); */

module.exports = {
  updatefestivalcal: updatefestivalcal,
  createfestivalcal: createfestivalcal,
  deletefestivalcal: deletefestivalcal,
  getfestivalcal: getfestivalcal
};

