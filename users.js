const { parse } = require('url')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { id = 'World' } = query
  res.end(`Hello ${id}!`)
}
