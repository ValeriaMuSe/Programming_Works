numero = 0;
suma = 0;

while (true){
    let numero = prompt("Digite un número")
    if(numero == 0){
        break;
    }
    
    suma = suma + numero;
    console.log(suma)

    let promedio=((suma)/3).toFixed(2)
    parseInt(promedio)
    console.log(promedio) 
}

