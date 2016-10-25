
module.exports = {
  senecaLog:{
    log:'silent'
  },
  transports:{
    listenings:[
      {
        type: 'amqp',
        pins: [
          { role: 'ROLE', cmd: '*' }
        ],
        url: process.env.AMQP_URL || 'amqp://guest:guest@128.199.105.153:5672'
      }
    ],
    clients:[
      {
        type: 'amqp',
        pins: [
          { role: '*', cmd: '*' }
        ],
        url: process.env.AMQP_URL || 'amqp://guest:guest@128.199.105.153:5672'
      }
    ]
  }
}
