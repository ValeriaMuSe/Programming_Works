const matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];


var turno = 0; 
var nuevaFila=0;                                                                                                                          
function transpose() {
    for (var i = 0; i < matriz.length; i++)                                                                                                                
    {
        for (var j = 0; j < i; j++)
        {
            const tmp = matriz[i][j];
            matriz[i][j] = matriz[j][i];   
            matriz[j][i] = tmp;
        }
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
 
transpose(matriz);
 //darle click a la fila 
document.getElementById("1").addEventListener("click", () => {
    main(0);
    
});

document.getElementById("2").addEventListener("click", () => {
    main(1);                                                       
});

document.getElementById("3").addEventListener("click", () => {
    main(2);
});

document.getElementById("4").addEventListener("click", () => {
    main(3);
});

document.getElementById("5").addEventListener("click", () => {
    main(4);
});

document.getElementById("6").addEventListener("click", () => {
    main(5);
});

document.getElementById("7").addEventListener("click", () => {
    main(6);
});

document.getElementById("8").addEventListener("click", () => {
    main(7);
});


 









function ganador(tablero, jugador,  fila, columna)
{
    // Aqui deben incluir el codigo para seleccionar cuando un usuario gana todas las posibles combinaciones.
    return false;
}


if (matriz.length == 0)	
		empate();


function empate(){
	console.log("Empate");
	alert("Empate");
	//TODO
	pResultado.style.visibility = "visible";
}

function main(fila) {
    function recursivoPila(vector, indexultimo) {
        if (indexultimo == 0)
        {
            return -1; 
        }
        if (vector[indexultimo] == 0) 
        {
            return indexultimo;
        }

        return recursivoPila(vector, indexultimo - 1);
    }

    ceromascercano = recursivoPila(matriz[fila], matriz.length);

    valores1 = document.querySelectorAll("[id='1']"); 
    valores2 = document.querySelectorAll("[id='2']");
    valores3 = document.querySelectorAll("[id='3']");
    valores4 = document.querySelectorAll("[id='4']");
    valores5 = document.querySelectorAll("[id='5']");
    valores6 = document.querySelectorAll("[id='6']");
    valores7 = document.querySelectorAll("[id='7']");
    valores8 = document.querySelectorAll("[id='8']");

    if(turno % 2 == 0)  
    {
            switch (fila)
            {
                case 0:
                    valores1[ceromascercano].style.background = "yellow";
                    break;
                case 1:
                    valores2[ceromascercano].style.background = "yellow";
                    break;
                case 2:
                    valores3[ceromascercano].style.background = "yellow";
                    break;
                case 3:
                    valores4[ceromascercano].style.background = "yellow";
                    break;
                case 4:
                    valores5[ceromascercano].style.background = "yellow";
                    break;
                case 5:
                    valores6[ceromascercano].style.background = "yellow";
                    break;
                case 6:                                                     
                    valores7[ceromascercano].style.background = "yellow";
                    break;
                case 7:
                    valores8[ceromascercano].style.background = "yellow";
                    break;
            }
            matriz[fila][ceromascercano] = 1;

    }else{ 
         switch (fila)
            {
                case 0:
                    valores1[ceromascercano].style.background = "blue";
                    break;
                case 1:
                    valores2[ceromascercano].style.background = "blue";
                    break;
                case 2:
                    valores3[ceromascercano].style.background = "blue";
                    break;
                case 3:
                    valores4[ceromascercano].style.background = "blue";
                    break;
                case 4:
                    valores5[ceromascercano].style.background = "blue";
                    break;
                case 5:
                    valores6[ceromascercano].style.background = "blue";
                    break;
                case 6:
                    valores7[ceromascercano].style.background = "blue";
                    break;
                case 7:
                    valores8[ceromascercano].style.background = "blue";
                    break;
            }
            matriz[fila][ceromascercano] = 2;

    }
  

    validacion(matriz,(turno % 2) + 1,fila,ceromascercano) 
    turno++
}
function validacion(matriz,turno,fila, columna) {
    let hayganador =ganador(matriz,turno,fila,columna)
    if (hayganador) {                                     
          alert("El jugador "+turno+" gana!");
      
    }
    

}