/*EN ESTA PESTAÑA GUARDAMOS EL CONTADOR (CUENTA ATRAS) COMO EL MENSAJE DE PERDER */

function cuentAtras(){
    if(!timer){
        //Dentro de timer guardamos el contador --Callback
        timer = setInterval(function() {
        //Se va restando al contador 1 a 1
            counter--;
            
            if (counter >= 0) {
                //si el contador es superior/igual a 0
                span = document.getElementById("timer");
                //Mostramos el contador
                span.innerHTML = counter;
                //console.log(counter);
            }

            if (counter === 0) {
                //Si el contador llega a 0 se acaba el juego
                mensajeGameOver();
                //Despues de mostrar el mensjae de GAME OVER se para el contador
                clearInterval(timer);
                
            }
        }, 1000);
    }

}


function mensajeGameOver(){
    //Mostramos el mensaje de perder a traves de un dialog
    var dialogo = document.getElementById('DialogoPerder');
    gameOverM.play();
    //Al mostrarse da 2opciones: jugar otra vez o volver al menu de minijuegos
    dialogo.show();
    //Se saca el prota del tablero
    document.removeEventListener('keyup', moveProta);
}
  
  
    