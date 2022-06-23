let nota1=parseInt(prompt("Ingrese su primer nota "))
let nota2=parseInt(prompt("Ingrese su segunda nota "))
let nota3=parseInt(prompt("Ingrese su tercer nota "))

let promedio=((nota1+nota2+nota3)/3).toFixed(2)
parseInt(promedio)
alert(promedio) 

if (promedio <= 65){
  alert("Estás quedado")  
}else if(promedio >= 65 && promedio <= 70){
  alert("Pasaste raspando")
}else if(promedio >= 70 && promedio <= 85){
  alert("No está mal")
}else if(promedio >= 85 && promedio <= 99){
  alert("Muy bien hecho")
}else if(promedio == 100){
  alert("Excelente, te ganaste un abrazo")
}