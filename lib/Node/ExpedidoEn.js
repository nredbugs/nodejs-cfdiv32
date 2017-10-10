'use strict'

const Node = require('./Node')

class ExpedidoEn extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cfdi:ExpedidoEn'
  }
}

module.exports = ExpedidoEn