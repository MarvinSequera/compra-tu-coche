require('dotenv').config()
const mongoose = require("mongoose")
const Maker = require("../models/Maker.model")

mongoose.connect(process.env.BD)
Maker.collection.drop()

makers = [
  { name: 'Mercedes-Benz' }, { name: 'BMW' }, { name: 'Audi' }, { name: 'Volkswagen' }, { name: 'Porsche' }, { name: 'Ford' },
  { name: 'Land Rover' }, { name: 'Abarth' }, { name: 'Acura' }, { name: 'Alfa Romeo' }, { name: 'Aston Martin' }, { name: 'Bentley' },
  { name: 'Bugatti' }, { name: 'Buick' }, { name: 'Cadillac' }, { name: 'Chevrolet' }, { name: 'Chrysler' }, { name: 'Citroen' },
  { name: 'Corvette' }, { name: 'Daewoo' }, { name: 'Daihatsu' }, { name: 'Daimler' }, { name: 'Dodge' }, { name: 'Ferrari' },
  { name: 'Fiat' }, { name: 'Great Wall' }, { name: 'Hummer' }, { name: 'Honda' }, { name: 'Hyundai' }, { name: 'Infiniti' },
  { name: 'Isuzu' }, { name: 'Iveco' }, { name: 'Jaguar' }, { name: 'Jeep' }, { name: 'Kia' }, { name: 'Lamborghini' },
  { name: 'Lexus' }, { name: 'Lincoln' }, { name: 'Maserati' }, { name: 'Maybach' }, { name: 'Mazda' }, { name: 'McLaren' },
  { name: 'Mini' }, { name: 'Mitsubishi' }, { name: 'Nissan' }, { name: 'Opel' }, { name: 'Peugeot' }, { name: 'Pontiac' },
  { name: 'Renault' }, { name: 'Rolls-Royce' }, { name: 'Rover' }, { name: 'Saab' }, { name: 'Seat' }, { name: 'Skoda' },
  { name: 'Smart' }, { name: 'Subaru' }, { name: 'Suzuki' }, { name: 'Tata' }, { name: 'Tesla' }, { name: 'Toyota' },
  { name: 'Volvo' }

]

Maker.create(makers, (err) => {
  if (err) { throw err }
  console.log(`Creado ${makers.length} maker`)
  mongoose.connection.close()
})