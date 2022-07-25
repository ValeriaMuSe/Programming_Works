let numero = prompt("digite un número ")

contador = 0;

sumatoria = 0;

while(contador <= numero){
  if(contador % 2 == 0){
    console.log("Ejecución" , contador)

    sumatoria = sumatoria + contador;
  }
  contador = contador + 1;
}

console.log(sumatoria)
