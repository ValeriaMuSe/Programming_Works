let v1 = prompt("digite el primer número ")
let v2 = prompt("digite el segundo número ")
let v3 = prompt("digite el tercer número ")
let v4 = prompt("digite el cuarto número ")
let v5 = prompt("digite el quinto número ")

if (v1 > v2 && v1 > v3 && v1 > v4 && v1 > v5) {
    alert("El numero 1 es el mayor " + v1)
} else if (v2 > v1 && v2 > v3 && v2 > v4 && v2 > v5) {
    alert("El numero 2 va a ser el mayor " + v2)
} else if (v3 > v1 && v3 > v2 && v3 > v4 && v3 > v5) {
    alert("El numero 3 es el mayor de todos" + v3) 
} else if (v4 > v1 && v4 > v2 && v3 > v4 && v3 > v5) {
    alert("El numero 4 es el mayor de todos" + v4)
} else if (v5 > v1 && v5 > v2 && v5 > v4 && v3 > v5) {
    alert("El numero 4 es el mayor de todos" + v4)     
} else {
    alert("son iguales")
}
