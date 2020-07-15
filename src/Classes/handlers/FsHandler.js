import log from '../classes/LogHandler'
import OSHandler from '../classes/OSHandler'
import fs from 'fs'

const __CLASS__ = 'FsHandler'

class FsHandler {
  fileExists (path) {
    return fs.existsSync(path)
  }

  readFile (filePath) {
    fs.readFile(filePath, function(err, buf) {
      console.log(buf);
      return buf.toString
    })
  }

  copy (source, destination) {
    log.info(`[${__CLASS__}@copy]: Copy operation...`)
    fs.copyFileSync(source, destination)
  }

  delete (path) {
    log.info(`[${__CLASS__}@delete]: Delete operation...`)
    fs.unlinkSync(path)
  }
}

export default FsHandler