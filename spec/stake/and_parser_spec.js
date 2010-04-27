Stake.AndParserSpec = JS.Test.describe(Stake.AndParser, function() { with(this) {
  include(Stake.SpecHelper)
  
  before(function() { with(this) {
    this.parser = Stake.Parser.fromSexp(
                  ['sequence',
                    ['and', ['string', 'foosball']],
                    ['string', 'foo'],
                    ['repeat', 0, ['any-char']]])
  }})
  
  it('parses text that begins with the expected pattern', function() { with(this) {
    assertParse(['foosball', 0, [
                  ['', 0, []],
                  ['foo', 0, []],
                  ['sball', 3, [
                    ['s', 3, []],
                    ['b', 4, []],
                    ['a', 5, []],
                    ['l', 6, []],
                    ['l', 7, []]]]]],
      
      parser.parse('foosball') )
  }})
  
  it('does not parse text that does not begin with the expected pattern', function() { with(this) {
    assertNull( parser.parse('foobar') )
  }})
}})
