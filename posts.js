module.exports = (_req, res) => {
  res.end(
    JSON.stringify({
      posts: []
    })
  )
}
