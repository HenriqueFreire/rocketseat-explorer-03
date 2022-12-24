// Manipulando arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar um item no começõ
techs.unshift('sql')

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar alguns elementos do array
console.log(techs.slice(1, 2))

// remover 1 ou mais itens de qualquer posição da array
techs.splice(1, 2)

// encontrar a posição de um elemento no array
console.log(techs.indexOf('html'))