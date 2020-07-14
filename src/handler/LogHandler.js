const log = require('electron-log')
log.transports.file.level = 'info'
log.transports.file.file = 'Heatfeet.log'

exports.modules = log