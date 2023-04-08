const express=require('express')
const router=express.Router()

const FuelStationContorller=require('../controller/FuelStationController')

router.post('/fuelStation',FuelStationContorller.registerFuelStation)
router.get('/fuelStation',FuelStationContorller.findAllStation)
router.delete('/fuelStation/:id',FuelStationContorller.deleteStation)

module.exports=router