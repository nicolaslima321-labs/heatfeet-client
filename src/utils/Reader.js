const lineReader = require('line-reader')

export default class Reader {
  processLineByLineFrom() {
    console.log(lineReader)
    lineReader.eachLine('/input.txt', function(line) {
      console.log(line)
      console.log(' tedsad ')
    })
  }
}
