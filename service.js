var addCurrentAgent = require('./hooks').addCurrentAgent

const services = [
  require('./agents/service'),
  require('./credentials/service'),
  require('./authentication/service'),
  require('./profiles/service'),
  require('./relationships/service')
]

module.exports = function () {
  const app = this

  app.hooks({
    before: {
      all: [
        addCurrentAgent
      ]
    }
  })

  services.forEach(service => {
    app.configure(service)
  })
}
