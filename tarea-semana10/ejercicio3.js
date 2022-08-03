const numeros = [2, 5, 1, 2, 4, 1];
console.log(numeros)

let repetidos = [];

const tempArray = [...numeros].sort();

for(let i = 0; i <= tempArray.length; i++){
  
  if (tempArray[i + 1] === tempArray[i]) {
    repetidos.push(tempArray[i]);
  }
}

console.log("El repetido es " + repetidos);