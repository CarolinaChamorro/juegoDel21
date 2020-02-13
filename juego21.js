class Carta {
  generarBaraja() {
    var palo = ["trebol", "corazonRojo","corazonNegro", "brillo"];
     var valor=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
     var nuevo=[];
    for(var i=0;i<valor.length;i++){
      for(var y=0;y<palo.length;y++){
        nuevo.push(valor[i]+" de "+palo[y]);
      }
    }
      return nuevo;
  }
}

class Juego {
  nuevaBaraja=[]
  mezclar() {
    for(var a=0;a<this.nuevaBaraja.length;a++){
      var ale= Math.round(Math.random()*52);
        return this.nuevaBaraja[a][ale];
    }

  }
  validar() {
    //sumatoria
    
  }
}

class Jugador{
  nuevaBaraja=[];
  pedir(){
    this.nuevaBaraja.forEach(element => {
      var ale= Math.round(Math.random()*52);
      console.log(element[ale])
    });
  }
}



