<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Proyect 01 - Minijuego</title>
    <!--Se llama a la tipografia de la letra del juego-->
    <link rel="stylesheet" href="style.css"><link href="https://fonts.cdnfonts.com/css/atari" rel="stylesheet">
      <!--Archivos JS en posición de uso-->
      <script type="text/javascript" src="./variables.js"></script>
      <script type="text/javascript" src="./app.js"></script>
      <script type="text/javascript" src="./elementos.js" ></script>
      <script type="text/javascript" src="./final.js" ></script>
  </head>
  <body>

    
    <div class="contenido">

      <div class="lateralIz">
        <!--Los contadores de luces-->
        <div><img src="./media/luzCambiada.png" alt="LuzCambiada"> <span id="LucesCambiadas"></span></div>
        <div><img src="./media/luzApagada.png" alt="LuzApagada"> <span id="contadorLed"></span></div>
        <div><img src="./media/luzNormal (2).png" alt="LuzAzul"> <span id="contadorLuces"></span></div>
        
        <br>
        <br>
          
        <div class="startButton">
          <!--Boton de Play-->
          <img src="./media/play3.png" alt="StartButton">
        </div>

      </div>
      <div class="centro">  
        <!--Tablero-->
        <div class="grid"></div>
      </div>

      <div class="lateralDer">
        <!--Marcador, tiempo y contador de Martillos-->
        <div>Marcador: <span id="score"></span></div>
        <br>
        <div>Timer : <span id=timer>60</span></div>
        <br>
        <div><img src="./media/martillo (1).png" alt=""><span id="contadorMartillos"></span></div>

        <!--DIALOGOS-->
        <!--INTRODUCCIÓN MARCADORES-->
        <dialog id="DialogoIntroMarcadores">
          <h2>INSTRUCCIONES</h2>
          <p><img src="./media/luzNormal (2).png" id="normal" alt="LuzAzul"> : Estas son las luces encendidas de alto consumo, para poder cambiarlas has de coger de</p>
          <p>   antemano las luces LED y pasar por encima se cambian automáticamente.</p>
          <p><img src="./media/luzApagada.png" id="apagada" alt="LuzApagada"> : Estas son las bombillas Led que has de recoger para poder cambiarlas por las bombillas</p>
          <p>azules. Se cogen pasando por encima.</p>
          <p><img src="./media/luzCambiada.png" id="cambiada" alt="LuzCambiada"> : Esta es la luz led cambiada y encendida.</p>
          <p><img src="./media/martillo (1).png" id="martillos" alt="martillos"> : Puedes recoger martillos por el camino, estos pueden destruir paredes. Cogelos pasando</p>
          <p>por encima.</p>
          <br>
          <button>Continuar</button>
        </dialog>

        <!--INTRODUCCIÓN Teclas-->
        <dialog id="DialogoIntroTeclas">
          <h2>INSTRUCCIONES</h2>
          <p>- Movimientos y uso de martillos - </p>
          <p><img src="./media/KeyB1 (1).png" id="keyb1" alt="KeyboardPixel1"> Para poder moverte por el tablero, utiliza las felchas del teclado.</p>
          <p><img src="./media/KeyB2 (1).png" id="keyb2" alt="KeyboardPixel2"> Para utilizar martillos. Ponte de lante de la pared que quieres picar </p>
          <p>y clica la tecla en que se situa la pared.</p>
          <br>
          <button>Cerrar</button>
        </dialog>

        <!--GAME OVER-->
        <dialog id="DialogoPerder">
          <h2>GAME OVER</h2>
          <p>¡Te has quedado sin tiempo!</p>
          <p>Puedes volver a la página de juegos o hacer un reset para volver a jugar.</p>
          <button onclick="location.reload()">Reset</button>
          <button onclick="location.replace('./page2.html')">Volver</button>
        </dialog>

        <!--WINNER-->
        <dialog id="DialogoGanar">
          <h2>WINNER</h2>
          <p>Has ganado con <span id="finalScore"></span> puntos en <span id="finalTiempo"></span> segundos. </p>
          <p>Puedes volver a la página de juegos o hacer un reset para volver a jugar.</p>
          <button onclick="location.reload()">Reset</button>
          <button onclick="location.replace('./page2.html')">Volver</button>
        </dialog>

        <!--ADVERTENCIA MARTILLO-->
        <dialog id="DialogoMartillo">
          <h2>ADVERTENCIA</h2>
          <p>No puedes utilizar esta opción.</p>
          <p>Clica Enter o Espacio para continuar.</p>
          <button>Aceptar</button>
        </dialog>
        
        <!--ATENCIÓN CAMBIO LUZ-->
        <dialog id="DialogoLed">
          <h2>ATENCIÓN</h2>
          <p>Necesitas una luz Led para hacer el cambio.</p>
          <p>Clica Enter o Espacio para continuar.</p>
          <button>Aceptar</button>
        </dialog>
      </div>
    </div>


  </body>
</html>