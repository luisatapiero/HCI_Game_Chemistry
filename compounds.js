class Compuesto {

    constructor(listElement, posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.formulasList = [listElement]; 
        this.name;
        this.formula = "";
        //this.imagen;
        this.createFormulasList();
        this.validateFormula();
        

    }


    createFormulasList(){
    
        this.formulasList = [5];
    
        this.formulasList[0] = {
            name: "Agua destilada",
            formula: "H,H,O",
        }
    
       this.formulasList[1] = {
            name: "Glicerina",
            formula: "C,C,C,H,H,H,H,H,H,H,H,O,O,O",
        }
    
        this.formulasList[2] = {
            name: "Carbomero",
            formula: "C,C,C,H,H,H,H,O,O",
        }
    
        this.formulasList[3] = {
            name: "Trietanolamina",
            formula: "C,C,C,C,C,C,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,N,O,O,O",
        }
    
        this.formulasList[4] = {
            name: "Alcohol",
            formula: "C,C,H,H,H,H,H,O,H",
        }
    
      
    }

    

validateFormula(){
       this.name = "Compuesto\nPeligroso";
       //this.imagen = loadImage("./data/peligro.png")
        this.formulasList.forEach(element => {
            this.formula = `${this.formula}${element}`
        });

}

pintarCompuesto(){
    this.imagen.resize(60,60);
    image(this.imagen,this.posx,this.posy)
    textSize(10);
    fill(255);
    text(this.name,this.posx,this.posy + 50);
}


getFormula(){
    return this.formula;
}

getName(){
    return this.name;
}

getPosX(){
    return this.posx;
}

getPosY(){
    return this.posy;
}

setPosX(posX){
this.posx = posX;}


setPosY(posY){
    this.posy = posY;
}



}