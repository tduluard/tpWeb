
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	//Q1: Définir ici les attributs de la 'classe'
  var xPos = 0;
  var yPos = 0;
  var xFinal = 0;
  var yFinal = 0;
  var mousePressed = false

	// Developper les 3 fonctions gérant les événements
  function handlerMouseClick(evt){
    mousePressed = true;

    var pos = getMousePosition(canvas, evt);
    console.log("Pressed : " + pos.x + " " + pos.y);
  }

  function handlerMouseMovement(evt){
    if(mousePressed){
      xPos = getMousePosition(canvas, evt).x;
      yPos = getMousePosition(canvas, evt).y;

      var pos = getMousePosition(canvas, evt);
      console.log("Movement Pressed : " + pos.x + " " + pos.y);
    }
  }

  function handlerMouseReleased(evt){
    mousePressed = false;
    xFinal = getMousePosition(canvas, evt).x;
    yFinal = getMousePosition(canvas, evt).y;

    var pos = getMousePosition(canvas, evt);
    console.log("Released : " + pos.x + " " + pos.y);
  }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", handlerMouseClick);
  canvas.addEventListener("mouseup", handlerMouseReleased);
  canvas.addEventListener("mousemove", handlerMouseMovement);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



