function main () {
  const raw = 10
  const promise = Promise.resolve(10)
  
  console.log('A)', raw)
  console.log('B)', promise)
}

module.exports = main