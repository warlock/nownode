const mongoose = require('mongoose')

module.exports = async (_req, res) => {
  await mongoose.connect('mongodb://gql_a1:admin1991@ds245512.mlab.com:45512/gql_a1', { useNewUrlParser: true })
  const Cat = mongoose.model('Cat', { name: String })
  await Cat.create({ name: 'Proba' })
  mongoose.disconnect()
  res.end(`meow`)
}
