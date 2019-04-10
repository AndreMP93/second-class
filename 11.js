const { getPosts, getUser, getProfile } = require('./super-secret')

async function main () {
  const posts = await getPosts()
  console.log('Posts)', posts)
  console.log()
  
  const post = posts[0]

  const user = await getUser(123456) // EDITADO
  console.log('User)', user)
  console.log()
  
  const profile = await getProfile(user.profileId)
  console.log('Profile)', profile)
}

module.exports = main