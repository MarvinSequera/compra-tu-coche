const express = require('express');
const router = express.Router();
const Car = require("../models/Car.model")
const User = require("../models/User.model")
const Maker = require("../models/Maker.model")

/* GET home page */
router.get('/', (req, res, next) => {
  Maker.find()
    .then(makers => {
      result = []
      makers.forEach(elem => result.push(elem.name))
      result.sort()
      res.json(result)
    })
    .catch(err => console.log("error al recuperar los fabricantes", err))
});

router.post('/addCar', (req, res, next) => {
  const manufacter = req.body.manufacter
  const model = req.body.model
  const kilometers = req.body.kilometers
  const hp = req.body.hp
  const year = req.body.year
  const color = req.body.color
  const price = req.body.price
  const photos = req.body.photos
  const addres = req.body.addres
  const user = req.user._id
  Car.create({ manufacter, model, kilometers, hp, year, color, price, photos, addres, user })
    .then(carToSell => {
      User.findByIdAndUpdate(user, { $push: { carsToSell: carToSell._id } })
        .then(response => res.status(200).json({ message: "Car Created" }))
        .catch(err => res.status(501).json({ message: "Error al actualizar el Usuario" }))
    })
    .catch(err => res.status(500).json({ message: "Error to Creat Car" }))
})
router.get('/getUserCars', (req, res, next) => {
  Car.find({ user: req.user._id })
    .then(cars => res.json(cars))
    .catch(erro => res.json({ message: 'error al recuperar los coches del usuario' }))
})
router.post('/deleteUserCar', (req, res, next) => {
  const carId = req.body.id
  Car.findByIdAndDelete(carId)
    .then(deleted => res.json({ message: 'car deleted' }))
    .catch(err => res.json({ message: "Error deleting the car" }))
})
module.exports = router;
