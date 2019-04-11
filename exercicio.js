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

function getUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.data
    })
}

async function main() {
  try {
    //Improvisei o username como senha
    let email = 'Sherwood@rosamond.me', password = 'Maxime_Nienow'
    const users = await getUsers()
  let i
  for(i = 0; i< users.length; i++){
    if(users[i].email == email && users[i].username ==password){
      console.log('Acessando Conta')
      break
    }
  }
  if(i == users.length){
    console.error('Email ou Senha invalidos')
  }

  } catch (err) {
    console.error(err)
  }
}

module.exports = main
