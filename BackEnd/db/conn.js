const mongoose = require('mongose')

async function main() {
  await mongoose.connect('mongodb://localhost:27027/adote_your_mascot')
  console.log("conectou ao mongoose!")
}


main().catch((err) => console.log(err))

module.exports = mongoose