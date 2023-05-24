/*ELEMENTOS RANDOM DEL TABLERO */

/*Funcion para poner las luces random por el tablero */
function luzRandom(){
    let pixelesTablero =400;
    let pixelRandom;
    let lucesColocadas=0;

    //Mientras que el contador de las luces colocadas es inferior a 4
    while (lucesColocadas < 4) {
    //Se ahce un random de los pixeles
    pixelRandom =Math.floor(Math.random()* pixelesTablero)+1;
    //console.log(pixelRandom);

        if (layout[pixelRandom] === 4 && layout[pixelRandom] !=protaCurrentIndex) {
            //Si el pixel es pasillo, se quita el pasillo y se coloca una led
            squares[pixelRandom].classList.remove('pasillo');
            squares[pixelRandom].classList.add('led');
            //Se repite el bucle hasta que se coloquen todas las luces
            lucesColocadas++;
        } 
      
    }
    
  }

/*Funcion para poner las luces random por el tablero */
function martilloRandom() {
    let pixelesTablero = 400;
    let pixelRandom;
    let martilloColocado=0;

    while (martilloColocado < 5) {
        pixelRandom =Math.floor(Math.random()* pixelesTablero)+1;
        //console.log(pixelRandom);
       
        if (layout[pixelRandom] === 4 && layout[pixelRandom] !=protaCurrentIndex && 
        !squares[pixelRandom].classList.contains('led')) {
            //Si el pixel es pasillo, se quita el pasillo y se coloca un martillo
            squares[pixelRandom].classList.remove('pasillo');
            squares[pixelRandom].classList.add('martillo');
            //Se repite el bucle hasta que se coloquen todos los martillos
            martilloColocado++;
        } 
        
    }

}

  
