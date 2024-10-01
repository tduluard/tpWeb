
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.strokeRect(this.startX, this.startY, this.width, this.height);
};
  
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};
  
Drawing.prototype.paint = function(ctx) {
    console.log(this.shapes);
    //ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(element => element.paint(ctx));
};

function updateShapeList(index, shape){
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(index, shape));
}

function toDom(index, shape){
    if(shape && typeof shape === 'object'){
        let innerHTML = `<li id="liRemove${index}">`
        if(shape.constructor === Rectangle){
            innerHTML += `<span style="color:'+shape.color+'">□</span> Rectangle`;
        }
        else if(shape.constructor === Line){
            innerHTML += `<span style="color:'+shape.color+'">/</span> Line`;
        }
        innerHTML += `<button type="button" class="btn btn-default remove" id="remove${index}"><span class="glyphocon glyphocon-remove-sign"></span></button>`;

        return innerHTML+`</li>`;
    }
}
