const operationalSystem = require('os')

export default class {
  replaceAll (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace)
  }

  isUnixSystem () {
    if (operationalSystem.platform() === 'linux' || operationalSystem.platform() === 'darwin') {
      return true
    }
    return false
  }

  getNativePath (path) {
    if (!this.isUnixSystem()) {
      return this.replaceAll(path, '/', '\\')
    }
    return path
  }
  
  getSystem () {
    return operationalSystem.platform()
  }
}
