const mongoose = require('mongoose')

module.exports = mongoose.model('Post', {
  title: String,
  date: {
    type: Date,
    default: Date.now
  },
  author: String,
  content: String,
  image: String
})
