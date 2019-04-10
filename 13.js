const axios = require('axios')

/*
 * Lê todos     : GET     /posts
 * Lê um        : ?
 * Adiciona um  : ?
 * Edita um     : ?
 * Remove um    : ?
 */

function getPosts () {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.data
    })
}

async function main () {
  try {
    const posts = await getPosts()
    console.log(posts)
  } catch (err) {
    console.error(err)
  }
}

module.exports = main