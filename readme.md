## cfdiv32

[![Build Status](https://travis-ci.org/blacktrue/nodejs-cfdiv32.svg?branch=develop)](https://travis-ci.org/blacktrue/nodejs-cfdiv32)


Genera un XML CFDI v3.2

## Instalación 

```
npm install cfdiv32 --save
```

## Ejemplo de uso

```javascript
'use strict'

const CFDI = require('cfdiv32').CFDI
const Emisor = require('cfdiv32').Emisor
const Receptor = require('cfdiv32').Receptor
const Concepto = require('cfdiv32').Concepto
const Traslado = require('cfdiv32').Traslado
const Retencion = require('cfdiv32').Retencion
const Domicilio = require('cfdiv32').Domicilio
const DomicilioFiscal = require('cfdiv32').DomicilioFiscal
const ExpedidoEn = require('cfdiv32').ExpedidoEn
const RegimenFiscal = require('cfdiv32').RegimenFiscal

const cfdi = new CFDI({
  'serie': 'A',
  'folio': '167ABC',
  'fecha': '2017-01-05T09:09:23',
  'noCertificado': '20001000000200001428',
  'subTotal': '1000',
  'Moneda': 'MXN',
  'total': '1500',
  'tipoDeComprobante': 'I',
  'formaDePago': 'PAGO EN UNA SOLA EXHIBICION',
  'metodoDePago': 'EFECTIVO',
  'descuento': '0.00',
  'TipoCambio': '1.0',
  'LugarExpedicion': '45079',
});

cfdi.cer = './test/resources/aaa010101aaa_FIEL.cer.pem'
cfdi.key = './test/resources/Claveprivada_FIEL_AAA010101AAA_20170515_120909.key.pem'

const emisor = new Emisor({
  'rfc': 'AUAC920422D38',
  'nombre': 'CESAR RENE AGUILERA ARREOLA'
})

emisor.add(new DomicilioFiscal({
  'codigoPostal': '62550',
  'localidad': 'jiutepec',
  'noExterior': '100',
  'estado': 'Morelos',
  'pais': 'Mexico',
  'municipio': 'jiutepec',
  'colonia': 'centro',
  'calle': 'almada'
}))

emisor.add(new ExpedidoEn({
  'codigoPostal': '62550',
  'localidad': 'jiutepec',
  'noExterior': '100',
  'estado': 'Morelos',
  'pais': 'Mexico',
  'municipio': 'jiutepec',
  'colonia': 'centro',
  'calle': 'almada'
}))

emisor.add(new RegimenFiscal({
  'Regimen': 'MI REGIMEN',
}))

cfdi.add(emisor)

const receptor = new Receptor({
  'rfc': 'HEPR930322977',
  'nombre': 'RAFAEL ALEJANDRO HERNÁNDEZ PALACIOS'
})

receptor.add(new Domicilio({
  'codigoPostal': '62573',
  'localidad': 'jiutepec',
  'noExterior': '110',
  'estado': 'Morelos',
  'pais': 'Mexico',
  'municipio': 'jiutepec',
  'colonia': 'la joya',
  'calle': 'juarez'
}))

cfdi.add(receptor)

cfdi.add(new Concepto({
  'noIdentificacion': '00001',
  'cantidad': '1.5',
  'unidad': 'TONELADA',
  'descripcion': 'ACERO',
  'valorUnitario': '1500000',
  'importe': '2250000'
}))

cfdi.add(new Concepto({
  'noIdentificacion': '00002',
  'cantidad': '1.5',
  'unidad': 'TONELADA',
  'descripcion': 'ACERO',
  'valorUnitario': '1500000',
  'importe': '2250000'
}))

cfdi.add(new Retencion({
  'impuesto': 'ISR',
  'importe': '2720'
}, {}, {
  'TotalImpuestosRetenidos': '100.50'
}))


cfdi.add(new Traslado({
  'impuesto': 'IVA',
  'importe': '2720',
  'tasa': '16.00'
}, {}, {
  'TotalImpuestosTrasladados': '100.50'
}))

console.log(cfdi.getXml())

cfdi.getCadenaOriginal()
  .then(data => {
    console.log('OK' + data)
  })
  .catch(err => {
    console.log('ERR' + err)
  })

```