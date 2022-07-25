let numero = prompt("Digite un número")


while(true){
    if(numero % 2 == 0){
        alert(numero/2)
    }
    
    if(numero/2 == 1){
        break;
    }
    
    if(numero % 2 != 0){
        alert(numero*3 + 1)
    }
}