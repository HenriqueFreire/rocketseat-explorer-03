// Call Back 

function sayMyname(name){
  console.log('antes de executar a função call')
  name()
}

sayMyname(
  () => console.log('estou em uma callback')
)

