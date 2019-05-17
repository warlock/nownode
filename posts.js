const mongoose = require('mongoose')
const Post = require('./models/Post')

module.exports = async (_req, res) => {
  await mongoose.connect('mongodb://gql_a1:admin1991@ds245512.mlab.com:45512/gql_a1', { useNewUrlParser: true })
  try {
    const posts = await Post.find()
    res.end(JSON.stringify({ posts }))
  } catch (error) {
    res.end(JSON.stringify({ res: 'error' }))
  }
  mongoose.disconnect()
}
