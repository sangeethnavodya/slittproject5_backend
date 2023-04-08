const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const FuelStation = require('../models/FuelStation')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const registerFuelStation = (req, res, next) => {
    let fuelstation = new FuelStation({
        id: uuidv4(),
        Name: req.body.Name,
        CompanyName: req.body.CompanyName,
        Province: req.body.Province
    })
    fuelstation.save().then(user => {
        res.json({
            massage: "Fuel Station added"
        })
    })
        .catch(error => {
            res.json({
                massage: error
            })
        })

}
const findAllStation = (req, res, next) => {
    FuelStation.find().then(station => {
        if (station) {
            res.json({
                massage: station
            })
        }
    }
    )
}
const deleteStation = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
      const result = await FuelStation.findOneAndDelete({ id: delid });
      if (!result) {
        return res.status(404).send("Fuel station not found");
      }
      return res.status(200).send("Fuel station deleted successfully");
    } catch (err) {
      // Handle errors here
    }
  };
  

module.exports = {
    registerFuelStation, findAllStation, deleteStation
}