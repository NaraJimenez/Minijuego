/*ESTA ES CONSIDERADA EL MAIN DEL JAVASCRIPT, AQUI SE LLAMAN TODAS LAS FUNCIOENS DE OTROS ARCHIVOS JS*/

/*El evento DOMContentLoaded se activa cuando el documento HTML inicial se ha cargado y 
analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los submarcos terminen de cargarse. */

document.addEventListener('DOMContentLoaded', () => {
  /*Devuelve el primer elemento del documento (utilizando un recorrido 
  primero en profundidad pre ordenado de los nodos del documento) que 
  coincida con el grupo especificado de selectores. */

  //CONSTANTES
  const grid = document.querySelector('.grid');
  const startButton = document.querySelector('.startButton');
  const contadorLedDisplay = document.getElementById('contadorLed');
  const scoreDisplay = document.getElementById('score');
  const FinalscoreDisplay = document.getElementById('finalScore');
  const contadorLucesDisplay= document.getElementById('contadorLuces');
  const contadorMartilloDisplay= document.getElementById('contadorMartillos');
  const LucesCambiadasDisplay= document.getElementById('LucesCambiadas');
  const FinaltiempoDisplay = document.getElementById('finalTiempo');



  /*Función de crear tablero */
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div');
      grid.appendChild(square);
      squares.push(square);

      //Mostramos contenido del tablero
      if(layout[i] === 4) {
        squares[i].classList.add('pasillo'); 
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall');
      } else if (layout[i] === 2) {
        squares[i].classList.add('luz1'); 
      } else if (layout[i] === 3) {
        squares[i].classList.add('led');
      } else if(layout[i] === 5){
        squares[i].classList.add('Cambiada');
      } else if(layout[i] === 6){
        squares[i].classList.add('martillo');
      } else if(layout[i] === 7){
        squares[i].classList.add('rota');
      } else if(layout[i] === 8){
        squares[i].classList.add('puntaIz');
      } else if(layout[i] === 9){
        squares[i].classList.add('puntaDer');
      } else if(layout[i] === 10){
        squares[i].classList.add('puntaBajoIz');
      } else if(layout[i] === 11){
        squares[i].classList.add('puntaBajoDer');
      } else if(layout[i] === 12){
        squares[i].classList.add('lateralArriba');
      } else if(layout[i] === 13){
        squares[i].classList.add('lateralDerecho');
      } else if(layout[i] === 14){
        squares[i].classList.add('lateralBajo');
      } else if(layout[i] === 15){
        squares[i].classList.add('lateralIzquierdo');
      } 
    }

    //Llamamos a funciones de elementos random
    luzRandom();
    martilloRandom();
    
    //Mostramos Contadores
    scoreDisplay.innerHTML = score;
    contadorLedDisplay.innerHTML = contadorLed;
    contadorLucesDisplay.innerHTML = contadorLuces;
    LucesCambiadasDisplay.innerHTML = LucesCambiadas;
    contadorMartilloDisplay.innerHTML = contadorMartillos;

  }

  //Creamos el tablero
  
  createBoard();
  var dialogoIntro1 = document.getElementById('DialogoIntroMarcadores');
  var dialogoIntro2 = document.getElementById('DialogoIntroTeclas');
  primerInstruccion();

  function primerInstruccion(){
    dialogoIntro1.show(); 
    dialogoIntro1.addEventListener('click', () => {
      dialogoIntro1.close()
    dialogoIntro2.show();
        dialogoIntro2.addEventListener('click', () => dialogoIntro2.close());
    });
  }
  
  /*Función de movimiento tableros */
  function moveProta(e) {
    squares[protaCurrentIndex].classList.remove('prota');
    squares[protaCurrentIndex].classList.remove('prota-back');
    squares[protaCurrentIndex].classList.remove('prota-iz');
    squares[protaCurrentIndex].classList.remove('prota-der');

    //Variable para mostrar dialogo de Martillo
    var dialogo = document.getElementById('DialogoMartillo');

    //Entra tecla presionada en el tablero
    switch(e.keyCode) {
      case 37://left
        if(protaCurrentIndex % width !== 0 &&
          !squares[protaCurrentIndex -1].classList.contains('wall') &&
          !squares[protaCurrentIndex -1].classList.contains('lateralIzquierdo') ){

            protaCurrentIndex -= 1;
            squares[protaCurrentIndex].classList.add('prota-iz');
        } 

        break;

      case 38://up
        if(protaCurrentIndex - width >= 0 &&
          !squares[protaCurrentIndex -width].classList.contains('wall') &&
          !squares[protaCurrentIndex -width].classList.contains('lateralArriba')){

            protaCurrentIndex -= width;
            squares[protaCurrentIndex].classList.add('prota-back');
          }

        break;

      case 39://rigth
        if(protaCurrentIndex % width < width - 1 &&
          !squares[protaCurrentIndex +1].classList.contains('wall') &&
          !squares[protaCurrentIndex +1].classList.contains('lateralDerecho')){

          protaCurrentIndex += 1;
          squares[protaCurrentIndex].classList.add('prota-der');
        } 

        break;

      case 40://down
        if ( protaCurrentIndex + width < width * width &&
          !squares[protaCurrentIndex +width].classList.contains('wall') &&
          !squares[protaCurrentIndex +width].classList.contains('lateralBajo')){

        protaCurrentIndex += width;
        squares[protaCurrentIndex].classList.add('prota');
        }

        break;
      
      case 65: //A --left
      //Para utilizar los martillos
      if(contadorMartillos >= 1  &&
        squares[protaCurrentIndex-1].classList.contains('wall')&&
        !squares[protaCurrentIndex -1].classList.contains('lateralIzquierdo')){

          squares[protaCurrentIndex].classList.add('prota-iz');
          squares[protaCurrentIndex-1].classList.remove('wall');
          squares[protaCurrentIndex-1].classList.add('pasillo');

          picarParedM.play();
          contadorMartillos--;
          contadorMartilloDisplay.innerHTML = contadorMartillos;

      } else{
        accionIncorrectaM.play();
        //Muestra el dialogo
        dialogo.show();

        contadorMartilloDisplay.innerHTML = contadorMartillos;
        //Se cierra el dialogo despues de clicar alguna tecla
        dialogo.addEventListener('click', () => dialogo.close());
      }

      break;

      case 68://D --rigth
        if(contadorMartillos >= 1  &&
          squares[protaCurrentIndex+1].classList.contains('wall')&&
          !squares[protaCurrentIndex +1].classList.contains('lateralDerecho')){

            squares[protaCurrentIndex].classList.add('prota-der');
            squares[protaCurrentIndex+1].classList.remove('wall');
            squares[protaCurrentIndex+1].classList.add('pasillo');

            picarParedM.play();
            contadorMartillos--;
            contadorMartilloDisplay.innerHTML = contadorMartillos;

        } else{
          accionIncorrectaM.play();
          dialogo.show();
          contadorMartilloDisplay.innerHTML = contadorMartillos;
          dialogo.addEventListener('click', () => dialogo.close());

        }

        break;

      case 83://S --down
      if(contadorMartillos >= 1  &&
        squares[protaCurrentIndex+width].classList.contains('wall')&&
        !squares[protaCurrentIndex +width].classList.contains('lateralBajo')){

          squares[protaCurrentIndex].classList.add('prota');
          squares[protaCurrentIndex+width].classList.remove('wall');
          squares[protaCurrentIndex+width].classList.add('pasillo');

          picarParedM.play();
          contadorMartillos--;
          contadorMartilloDisplay.innerHTML = contadorMartillos;

      } else{
        accionIncorrectaM.play();
        dialogo.show();
        contadorMartilloDisplay.innerHTML = contadorMartillos;
        dialogo.addEventListener('click', () => dialogo.close());

      }

        break;   

      case 87://W --up
      if(contadorMartillos >= 1  &&
        squares[protaCurrentIndex-width].classList.contains('wall')&&
        !squares[protaCurrentIndex -width].classList.contains('lateralArriba')){

          squares[protaCurrentIndex].classList.add('prota-back');
          squares[protaCurrentIndex-width].classList.remove('wall');
          squares[protaCurrentIndex-width].classList.add('pasillo');

          picarParedM.play();
          contadorMartillos--;
          contadorMartilloDisplay.innerHTML = contadorMartillos;

      } else{
        accionIncorrectaM.play();
        dialogo.show();
        contadorMartilloDisplay.innerHTML = contadorMartillos;
        dialogo.addEventListener('click', () => dialogo.close());

      }

        break;
    }
    
    //Añadimos al tablero el prota
    squares[protaCurrentIndex].classList.add('prota');

    //Llamamos a funciones
    ledCambio();
    ledCogida();
    checkForWin();
    cogerMartillo();

  }

   /*Empieza el juego clicando el boton Click*/
   startButton.addEventListener('click', () => {
    //console.log('Boton Start clicado...')

    //Metemos al protragonista en el tablero
    squares[protaCurrentIndex].classList.add('prota-der');
    //Hacemos que pueda moverse por eltablero
    document.addEventListener('keyup', moveProta);
   
    //clearInterval(introMusicTimer)
    //Llamamos función de contador
    cuentAtras();
    
  })

  /*Función coger martillo del tablero */
  function cogerMartillo(){
    if (squares[protaCurrentIndex].classList.contains('martillo')) {

      //Se suma al contador la recogida del martillo
      contadorMartillos++;
      //meter puntos
      contadorMartilloDisplay.innerHTML = contadorMartillos;
      //Se elimina y cambia por pasillo
      squares[protaCurrentIndex].classList.remove('martillo');
      squares[protaCurrentIndex].classList.add('pasillo');

      elementoRecogidoM.play();

      //Se suma puntos al marcador y se muestran
      score += puntoPorMartillo;
      scoreDisplay.innerHTML = score;
    }
  }

  /*Función de cambiar la luz normal (AZUL) por la led (GRIS) y que se cambie por la encendida(AMARILLA)*/
  function ledCambio(){
    //Variable que guarda el dialogo de aviso
    var dialogo = document.getElementById('DialogoLed');
    
    //Si el contador de luces recogidas es mayor a 1
    if (squares[protaCurrentIndex].classList.contains('luz1') && contadorLed >= 1){
      //Se cambian los marcadores
      contadorLed--;
      contadorLuces--;
      LucesCambiadas ++;
      score += scorePorCambio;

      //Se muestran
      scoreDisplay.innerHTML = score;
      contadorLedDisplay.innerHTML = contadorLed;
      contadorLucesDisplay.innerHTML = contadorLuces;
      LucesCambiadasDisplay.innerHTML = LucesCambiadas;

      //Quita la luz y se añade la encendida
      squares[protaCurrentIndex].classList.remove('luz1');
      squares[protaCurrentIndex].classList.add('Cambiada');

      //Hacemos colisión con luz cambiada para que no la chafe y se vea el cambio
      if (protaCurrentIndex ==163 ) {
        squares[protaCurrentIndex].classList.remove('prota');
        protaCurrentIndex=143;
        squares[protaCurrentIndex].classList.add('prota');
        
      } else if (protaCurrentIndex == 356) {
        squares[protaCurrentIndex].classList.remove('prota');
        protaCurrentIndex=376;
        squares[protaCurrentIndex].classList.add('prota');
        
      } else if (protaCurrentIndex === 198) {
        squares[protaCurrentIndex].classList.remove('prota');
        protaCurrentIndex=178;
        squares[protaCurrentIndex].classList.add('prota');
        
      } else if (protaCurrentIndex === 302) {
        squares[protaCurrentIndex].classList.remove('prota');
        protaCurrentIndex=301;
        squares[protaCurrentIndex].classList.add('prota');
        
      }

      




      luzCompletadaM.play();

    } else if (squares[protaCurrentIndex].classList.contains('luz1') && contadorLed <1 ){
      //Si no se puede cambiar se muestra dialogo
      accionIncorrectaM.play();
      dialogo.show();
      dialogo.addEventListener('click', () => dialogo.close());
      
    }

  } 


  /*Recoger las luces led */
  function ledCogida() {
    if (squares[protaCurrentIndex].classList.contains('led')) {
      //Varaibles
      contadorLed ++; 
      score += scorePorLed;

      //Mostrar elementos
      contadorLedDisplay.innerHTML = contadorLed;
      scoreDisplay.innerHTML = score;

      elementoRecogidoM.play();
      
      
      //Eliminar luz led y poner pasillo
      squares[protaCurrentIndex].classList.remove('led');
      squares[protaCurrentIndex].classList.add('pasillo');
    }
  }

  /*Función Ganar = se gana al cambiar todas las luces antes de que se acabe el tiempo */
  function checkForWin(){
    if (LucesCambiadas === 4 ) {
      //Varaible del dialogo
      var dialogo = document.getElementById('DialogoGanar'); 
      //Se para el tiempo
      clearInterval(timer);
      //Mostramos marcadores
      
      FinalscoreDisplay.innerHTML = score;
      FinaltiempoDisplay.innerHTML = counter;

      winnerMusic.play();
      //Mostrar dialogo
      dialogo.show();



      //Se deja de poder mover el prota
      document.removeEventListener('keyup', moveProta);
    }

  }

   
}); //FINAL DEL CODIGO