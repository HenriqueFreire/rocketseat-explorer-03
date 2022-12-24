/*
Function() constructor
  * expressão new
  * criar novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
}

const mayk = new Person('Mayk')
console.log(mayk)