'use strict'

const Node = require('./Node')

class RegimenFiscal extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cfdi:RegimenFiscal'
  }
}

module.exports = RegimenFiscal