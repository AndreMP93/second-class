const { waitBeforeResolve } = require('./super-secret')

function main () {
  const value = 10
  const time = 3000

  const lazy = waitBeforeResolve(value, time)

  console.log(lazy)

  setTimeout(() => {
    console.log(lazy)
  }, 5000)
}

module.exports = main