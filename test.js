var expect = require('chai').expect
  , clone = require('./')

describe('clone', function() {
  
  it('should clone object', function() {
    var a = {}
      , b = clone(a)

    b.foo = 'bar'

    expect(a).to.be.eql({})
    expect(b).to.be.eql({ foo: 'bar' })
  })
  
  it('should ignore functions', function() {
    var a = String
      , b = clone(a)

    b.foo = 'bar'

    expect(a.foo).to.be.eql('bar')
    expect(b.foo).to.be.eql('bar')
  })
  
  it('should ignore strings', function() {
    expect(clone('foo')).to.be.eql('foo')
  })

})