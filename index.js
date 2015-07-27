var parse = require('utilise.parse')
  , str = require('utilise.str')
  , is = require('utilise.is')

module.exports = function clone(d) {
  return !is.fn(d) 
       ? parse(str(d))
       : d
}
