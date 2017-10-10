'use strict'

const Node = require('./Node')

class DomicilioFiscal extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cfdi:DomicilioFiscal'
  }
}

module.exports = DomicilioFiscal