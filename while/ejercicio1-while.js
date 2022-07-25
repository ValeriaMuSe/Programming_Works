let v1 = prompt("digite el primer número ")
let v2 = prompt("digite el segundo número ")

if (v1 < v2){
  alert("El primer número es el menor ")
} else if (v2 < v1) {
  alert("El segundo es el menor ")
}

contador = 0

while (contador <= v2){
  console.log(contador)
  contador= contador + 1
}