let peso = prompt ("Ingrese su peso ")
let altura = prompt ("Ingrese su altura")

imc = peso / (altura*altura)

alert(imc)

if (imc <= 18.5){
  alert("Bjo peso")  
}else if(imc <= 25){
    alert("Peso normal")
}else if(imc <= 30){
    alert("Sobre peso")
}else if(imc <= 35){
    alert("Obesidad leve")
}else if(imc <= 39.99){
    alert("Obesidad media")
}else if(imc <= 40){
    alert("Obesidad morbida")
}
else("Digite solo valores númericos que indique su peso y altura")