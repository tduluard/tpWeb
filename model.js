
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes = new Map();
}

function Shape(startX, startY, thickness, color){
    this.startX = startX;
    this.startY = startY;
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(startX, startY, hight, width, thickness, color){
    Shape.call(startX, startY, thickness, color);
    this.hight = hight;         //Hauteur du rectangle
    this.width = width;         //largeur du rectangle
}

function Line(startX, startY, endX, endY, thickness, color){
    Shape.call(startX, startY, endX, endY, thickness, color);
    this.endX = endX;
    this.endY = endY;
}