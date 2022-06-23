alert("Opciones para realizar su operación: 1=suma, 2=resta, 3=multplicación, 4=división")
let operacion
operacion = prompt("Digite el tipo de operación que desea realizar")
let v1
v1 = prompt("Digite su primer valor")
let v2
v2 = prompt("Digite su segundo valor")

suma = parseInt(v1) + parseInt(v2)
resta = parseInt(v1) - parseInt(v2)
multiplicacion = parseInt(v1) * parseInt(v2)
division = parseInt(v1) / parseInt(v2)

if (operacion == "1"){
    alert("La respuesta es " + suma)
}
if (operacion == "2"){
    alert("La respuesta es " + resta)
}
if (operacion == "3"){
    alert("La respuesta es " + multiplicacion)
}
if (operacion == "4"){
    alert("La respuesta es " + division)
}

//Lo hice con ayuda de Valeria Jiménez