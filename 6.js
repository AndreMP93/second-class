const { waitBeforeResolve } = require('./super-secret')

function main () {
  const value = 10
  const time = 3000

  const lazy = waitBeforeResolve(value, time)

  lazy
    .then(data => {
      console.log('A)', data)

      return Promise.resolve(10)
    })
    .then(data => {
      console.log('B)', data)

      return Promise.resolve(10)
    })
    .then(data => {
      console.log('C)', data)

      return Promise.resolve(10)
    })
    .then(data => {
      console.log('D)', data)
    })
}

module.exports = main