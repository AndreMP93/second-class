const axios = require('axios')

/*
 * Lê todos     : GET     /posts
 * Lê um        : GET     /posts/1
 * Adiciona um  : ?
 * Edita um     : ?
 * Remove um    : ?
 */

function getPost (id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      return response.data
    })
}

async function main () {
  try {
    const post = await getPost(1)
    console.log(post)
  } catch (err) {
    console.error(err)
  }
}

module.exports = main