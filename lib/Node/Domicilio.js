'use strict'

const Node = require('./Node')

class Domicilio extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cfdi:Domicilio'
  }
}

module.exports = Domicilio