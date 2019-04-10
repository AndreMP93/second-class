const { getPosts, getUser, getProfile } = require('./super-secret')

function main () {
  getPosts()
    .then(posts => {
      console.log('Posts)', posts)
      console.log()

      const post = posts[0]

      return getUser(post.userId)
    })
    .then(user => {
      console.log('User)', user)
      console.log()
      
      return getProfile(user.profileId)
    })
    .then(profile => {
      console.log('Profile)', profile)
    })
}

module.exports = main