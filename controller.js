
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
    document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
    document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
    document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(dnd){
        if(this.currEditingMode==editingMode.rect){
            this.currentShape = new Rectangle();
        }
        else{
            this.currentShape = new Line();
        }
    }.bind(this);

    this.onInteractionUpdate = function(dnd){
        if(this.currEditingMode==editingMode.rect){
            this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalY-dnd.initY, dnd.finalX-dnd.initX, this.currLineWidth, this.currColour);
        }
        else{
            this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
        }
        drawing.paint(ctx,canvas);
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionEnd = function(dnd){
        do{
            var uuid = Math.floor(Math.random() * 1000)+"";
        }while(drawing.shapes.has(uuid));

        console.log(uuid);
        drawing.shapes.set(uuid, this.currentShape);
        drawing.paint(ctx,canvas);
        updateShapeList(uuid, this.currentShape);
        document.getElementById("remove"+uuid).onclick = (event) => remove(drawing, event.currentTarget.id.substring(6), ctx, canvas);
        this.currentShape.paint(ctx);
    }.bind(this);
};

function remove(drawing, index, ctx, canvas){
    drawing.shapes.delete(index);
    document.getElementById('liRemove'+index).remove();

    console.log(drawing.shapes);
    drawing.paint(ctx, canvas);
}


