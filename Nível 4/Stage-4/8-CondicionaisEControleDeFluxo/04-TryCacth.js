// Throw

function sayMyName(name='') {
  if (name === '') {
    throw 'nome é obrigatório!'
  }

  console.log('Depois do erro')
}

//try e catch

try {
  sayMyName()
} catch (error) {
  console.log(error)
}

console.log('Depois do try e catch')