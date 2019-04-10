const { getPosts, getUser, getProfile } = require('./super-secret')

async function main () { // EDITADO
  const posts = await getPosts()
  console.log('Posts)', posts)
  console.log()
  
  const post = posts[0]

  const user = await getUser(post.userId)
  console.log('User)', user)
  console.log()
  
  const profile = await getProfile(user.profileId)
  console.log('Profile)', profile)
}

module.exports = main