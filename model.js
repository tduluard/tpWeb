
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){

}

function formes(xD, yD){
    var tabFormes = new Array();
    var xDebut = xD;
    var yDebut = yD;

    function Rectangle(xD, yD, xA, yA, larg, epais){
        var xArrive = xA;
        var yArrive = yA;
        var xDebut = xD;
        var yDebut = yD;
        var largeur = larg;
        var epaisseur = epais;
    }

    function Line(){

    }
}


Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
    ctx.stroke();
};
  
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};
  
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
};
  
