const axios = require('axios')

/*
 * Lê todos     : GET     /posts
 * Lê um        : GET     /posts/1
 * Adiciona um  : POST    /posts
 * Edita um     : PUT     /posts/1
 * Remove um    : ?
 */

function editPost (id, data) {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then(response => {
      return response.data
    })
}

async function main () {
  try {
    const id = 1
    const data = {
      title: 'Olá mundo',
      userId: 100000,
      body: 'Lorem ipsum dolor sit amet'
    }
    const post = await editPost(id, data)
    console.log(post)
  } catch (err) {
    console.error(err)
  }
}

module.exports = main