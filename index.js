'use strict'

const CFDI = require('./lib/CFDI')
const Emisor = require('./lib/Node/Emisor')
const Receptor = require('./lib/Node/Receptor')
const Concepto = require('./lib/Node/Concepto')
const Traslado = require('./lib/Node/Impuesto/Traslado')
const Retencion = require('./lib/Node/Impuesto/Retencion')
const Domicilio = require('./lib/Node/Domicilio')
const DomicilioFiscal = require('./lib/Node/DomicilioFiscal')
const ExpedidoEn = require('./lib/Node/ExpedidoEn')
const RegimenFiscal = require('./lib/Node/RegimenFiscal')

module.exports = {
  CFDI,
  Emisor,
  Receptor,
  Concepto,
  Traslado,
  Retencion,
  Domicilio,
  DomicilioFiscal,
  ExpedidoEn,
  RegimenFiscal
};