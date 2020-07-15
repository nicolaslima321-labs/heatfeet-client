const log = require('electron-log')
log.transports.file.level = 'info'
log.transports.file.file = 'Heatfeet.log'

export default log