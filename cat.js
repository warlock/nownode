//const mongoose = require('mongoose')
//const Post = require('./models/Post')

module.exports = async (req, res) => {
  /*
  await mongoose.connect('mongodb://gql_a1:admin1991@ds245512.mlab.com:45512/gql_a1', { useNewUrlParser: true })
  try {
    await Post.create({
  title: req.body.title,
  date: {
    type: Date,
    default: Date.now
  },
  author: String,
  content: String,
  image: String
})
    res.end(JSON.stringify({ res: 'ok' }))
  } catch (error) {
    res.end(JSON.stringify({ res: 'error' }))
  }
  mongoose.disconnect()
  */
  res.end(JSON.stringify({ res: req.body }))
}
