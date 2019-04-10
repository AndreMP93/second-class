const axios = require('axios')

/*
 * Lê todos     : GET     /posts
 * Lê um        : GET     /posts/1
 * Adiciona um  : POST    /posts
 * Edita um     : ?
 * Remove um    : ?
 */

function addPost (data) {
  return axios.post('https://jsonplaceholder.typicode.com/posts/', data)
    .then(response => {
      return response.data
    })
}

async function main () {
  try {
    const data = {
      title: 'Olá mundo',
      userId: 1,
      body: 'Lorem ipsum dolor sit amet'
    }
    const post = await addPost(data)
    console.log(post)
  } catch (err) {
    console.error(err)
  }
}

module.exports = main