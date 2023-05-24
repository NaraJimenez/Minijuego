    /*Aqui se guardan las variables para el juego, queda en una pestaña a parte para poder relacionarlas con otros
    documentos de JavaScript */

    //VARIABLES

        let score = 0;
        // Cantidad de Luces Led que tienes
        let contadorLed = 0; 
        //Ancho de la tabla para poder crearla a posteriori
        const width = 20;
        //Luces a cambiar en el tablero
        let contadorLuces = 4; 
        //Luces cambiadas
        let LucesCambiadas = 0; 
        //Contador de martillso que tiene el jugador
        let contadorMartillos=0;
        //Puntos por Led
        let scorePorLed = 10;
        //Puntos por el cambio realizado
        let scorePorCambio =15;
        //Puntos por martillo
        let puntoPorMartillo= 5;
        //Pixel en el que empieza el protagonista
        let protaCurrentIndex = 21;
        //Variable para el contador
        let timer;
        //Limite del contador
        let counter = 60;


        //MUSICA
        const winnerMusic = new Audio('./assets/winnerSound.wav');
        const gameOverM = new Audio('./assets/gameOver.wav');
        const luzCompletadaM = new Audio('./assets/cambiada.wav');
        const elementoRecogidoM = new Audio('./assets/cogido.wav');
        const picarParedM = new Audio('./assets/picar.wav');
        const accionIncorrectaM = new Audio('./assets/atencion.mp3');

        //Mapa tablero 
        const layout = [
            8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9,  
            15, 7, 4, 4, 1, 4, 4, 4, 4, 4, 1, 7, 4, 4, 4, 4, 4, 4, 4, 13,  
            15, 1, 1, 4, 1, 4, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 4, 1, 4, 13,  
            15, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 4, 13,   
            15, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 1, 1, 1, 13,  
            15, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 13,  
            15, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4, 4, 1, 1, 4, 4, 13,  
            15, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 13,  
            15, 4, 1, 2, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 13, 
            15, 7, 1, 1, 1, 4, 4, 4, 1, 4, 1, 4, 1, 1, 4, 4, 4, 1, 2, 13,  
             
            15, 4, 4, 4, 1, 4, 1, 1, 1, 4, 1, 4, 4, 4, 4, 1, 1, 1, 1, 13,   
            15, 1, 1, 4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 4, 13,  
            15, 4, 1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 4, 4, 7, 4, 4, 13,  
            15, 4, 1, 4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 1, 1, 4, 1, 4, 13,  
            15, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 4, 13,  
            15, 4, 2, 1, 4, 4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 1, 1, 4, 13,  
            15, 4, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 13,  
            15, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 1, 2, 1, 4, 13,   
            15, 4, 1, 1, 1, 1, 4, 1, 1, 4, 4, 1, 1, 1, 4, 1, 4, 1, 4, 13, 
            15, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 7, 4, 1, 4, 4, 4, 4, 4, 13,  
            10, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 11,
            
        ];
  
        //LEYENDA CASILLAS
        // 0 - Casilla con puntos - HE DECIDIO NO PONERLO
        // 1 - Muro
        // 2 - luz a cambiar (AZUL)
        // 3 - Lueces led (GRIS)
        // 4 - Pasillo
        // 5 - Luz cambiada (AMARILLA)
        // 6 - Martillo
        // 7 - Pasillo roto - Utilizado como limite para elementos random
        // 8 - Punta izquierda-arriba del tablero
        // 9 - Punta derecha-arriba
        // 10 - Punta izquierda-abajo
        // 11 - Punta derecha-anajo
        // 12 - Esquina tablero arriba
        // 13 - Esquina tablero derecha
        // 14 - Esquina tablero abajo
        // 15 - Esquina tablero izquierda
    
        //Array de casillas
        const squares = [];
        
        //Para mostrar los elementos
        const contadorLedDisplay = document.getElementById('contadorLed');
        const FinalscoreDisplay = document.getElementById('finalScore');
        const FinaltiempoDisplay = document.getElementById('finalTiempo');