
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	//Q1: Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.mousePressed = false;
  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements
  this.clickMouse = function(evt){
    this.mousePressed = true;
    this.initX = getMousePosition(canvas, evt).x;
    this.initY = getMousePosition(canvas, evt).y;
    this.interactor.onInteractionStart(this);
  }.bind(this);

  this.mouseMove = function(evt){
    if(this.mousePressed){
      this.finalX = getMousePosition(canvas, evt).x;
      this.finalY = getMousePosition(canvas, evt).y;
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.releaseMouse = function(evt){
    this.mousePressed = false;
    this.initX = getMousePosition(canvas, evt).x;
    this.initY = getMousePosition(canvas, evt).y;
    this.interactor.onInteractionEnd(this);
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



