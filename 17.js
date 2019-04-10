const axios = require('axios')

/*
 * Lê todos     : GET     /posts
 * Lê um        : GET     /posts/1
 * Adiciona um  : POST    /posts
 * Edita um     : PUT     /posts/1
 * Remove um    : DELETE  /posts/1
 */

function deletePost (id) {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      console.log(response.status) // OLHA AQUI
      return response.data
    })
}

async function main () {
  try {
    const id = 1
    const post = await deletePost(id)
    console.log(post)
  } catch (err) {
    console.error(err)
  }
}

module.exports = main