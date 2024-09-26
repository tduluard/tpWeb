
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	//Q1: Définir ici les attributs de la 'classe'
  var initX = 0;
  var initY = 0;
  var finalX = 0;
  var finalY = 0;
  var mousePressed = false

	// Developper les 3 fonctions gérant les événements
  this.clickMouse = function(evt){
    mousePressed = true;

    this.initX = getMousePosition(canvas, evt).x;
    this.initY = getMousePosition(canvas, evt).y;

    console.log("Pressed : " + this.initX + " " + this.initY);
  }.bind(this);

  this.mouseMove = function(evt){
    if(mousePressed){
      this.finalX = getMousePosition(canvas, evt).x;
      this.finalY = getMousePosition(canvas, evt).y;

      console.log("Movement Pressed : " + this.finalX + " " + this.finalY);
    }
  }.bind(this);

  this.releaseMouse = function(evt){
    mousePressed = false;

    this.initX = getMousePosition(canvas, evt).x;
    this.initY = getMousePosition(canvas, evt).y;

    console.log("Released : " + this.initX + " " + this.initY);
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.clickMouse, false);
  canvas.addEventListener('mouseup', this.releaseMouse, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



