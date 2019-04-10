function waitBeforeResolve (x, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, time)
  })
}

async function getPosts (id) {
  await waitBeforeResolve(0, 2000)

  return [
    { title: 'Olá Mundo', userId: 10 },
    { title: 'Tchau Mundo', userId: 11 },
    { title: 'The Game', userId: 12 }
  ]
}

async function getUser (id) {
  await waitBeforeResolve(0, 2000)

  if (id === 123456) {
    throw new Error('404 not found')
  }

  return {
    id,
    profileId: id + 1000,
    name: 'john.doe'
  }
}

async function getProfile (id) {
  await waitBeforeResolve(0, 2000)

  return {
    id,
    name: 'John',
    surname: 'Doe'
  }
}

module.exports = {
  waitBeforeResolve,
  getPosts,
  getUser,
  getProfile
}