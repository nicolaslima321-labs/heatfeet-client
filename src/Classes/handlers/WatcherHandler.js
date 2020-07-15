import eventsBus from '../events/eventsBus.js'
import FsHandler from '../classes/FsHandler'
import log from '../classes/LogHandler'
import OSHandler from '../classes/OSHandler'

const chokidar = require('chokidar')

const __CLASS__ = 'WatcherHandler'

let watcher

export default class WatcherHandler {

  constructor (path) {
    'use strict'
    this.fs = new FsHandler()
    this.osHandler = new OSHandler()
    this.dir = this.osHandler.getNativePath(path)
    this.feetProps = []
  }

  create () {
    // Initialize watcher.
    watcher = chokidar.watch(this.dir, {
      awaitWriteFinish: true,
      persistent: true
    })

    // Add event listeners.
    watcher
      .on('add', path => {
        log.info(`[${__CLASS__}@create]: File ${path} has been added`)
      })
      .on('change', path => {
        log.info(`[${__CLASS__}@create]: File ${path} has been changed`)
        var fileData = this.FsHandler.readFile(path)
        this.feetProps = this.handleFileData(fileData)

        eventsBus.$emit('new-value')
      })
      .on('unlink', path => {
        log.info(`[${__CLASS__}@create]: File ${this.feetPropsFile} has been removed`)
      })
  }

  destroyInstance () {
    log.info(`[${__CLASS__}@destroyInstance] Destroying instance...`)
    watcher.close()
    this.osHandler = null
    this.dir = null
  }

  handleFileData (feetPropEntireData) {
    return feetPropEntireData.split("\n")
  }
}
