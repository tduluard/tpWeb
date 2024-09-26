
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing{
    constructor(){
        this.forms = new Array(2);
    }

    getForms = function(){
        return forms;
    }

    addForm = function(shape){
        this.forms.add(shape);
    }

}

class Shape{
    constructor(xD, yD, epais, color){
        this.xDebut = xD;
        this.yDebut = yD;
        this.epaisseur = epais;     //Epaisseur du trait
        this.color = color;
    }

    getInitX = function(){
        return this.xDebut;
    }

    getInitY = function(){
        return this.yDebut;
    }
}

class Rectangle extends Shape{
    constructor(xD, yD, larg, epais, hauteur, color){
        super(xD, yD, epais, color);
        this.hauteur = hauteur      //Hauteur du rectangle
        this.largeur = larg;        //largeur du rectangle
    }

    getFinalX = function(){
        return this.xDebut+this.largeur;
    }

    getFinalY = function(){
        return this.yDebut+this.hauteur
    }
}

class Line extends Shape{
    constructor(xD, yD, xA, yA, epais, color){
        super(xD, yD, epais, color)
        this.xArrivee = xA;
        this.yArrivee = yA;
    }

    getFinalX = function(){
        return this.xArrivee;
    }

    getFinalY = function(){
        return this.yArrivee;
    }
}