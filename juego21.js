class Carta{
  constructor(palos,valor=[],texto){
    this.palos=palos;
    this.valor=valor;
    this.texto=texto;
    
  }
}

class Palo{
  constructor(figura){
    this.figura=figura;
  }
}

class Fabrica {
   palos = [new Palo("trebol negro"),new Palo("corazon Rojo"),new Palo("corazon Negro"),new Palo("brillo rojo")];
     letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      Valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      mazo=[];
      mazoEnOrden=[];
      elemento;
  crearBarajas() {
    // insertar los valores al array
    palos.forEach(function (elementPalo) {
      letras.forEach(function (elementLetra, index) {
          if (index == 0) {
              this.mazo.push(new Carta(elementPalo, [1, 11], elementLetra))
          } else if (index > 9) {
              this.mazo.push(new Carta(elementPalo, Valores[9], elementLetra))
          } else {
              this.mazo.push(new Carta(elementPalo, Valores[index], elementLetra))
          }
      },this)
  },this)
  
  
    /* for(var i=0;i<this.letras.length;i++){
      for(var y=0;y<this.palos.length;y++){
        this.mazo.push(this.letras[i]+" de "+this.palos[y]);
      }
    }
      return this.mazo;
  } */
}
mezclar(){
 
}

}

class Juego extends Fabrica {
  nuevaBaraja=[]
  contador=0;
  mezclar() {
    while (this.mazoEnOrden.length < 52) {
      let ale = Math.floor(Math.random() * (52));
      this.elemento = this.mazoEnOrden.find(element => element == ale)
      let condicion = (this.elemento == undefined) ? this.mazoEnOrden.push(ale) : ale;
  }
  
  for (let i = 0; i < this.mazo.length - 1; i++) {
      this.elemento = this.mazo[this.mazoEnOrden[i]]
      this.mazo[this.mazoEnOrden[i]] = this.mazo[i]
      this.mazo[i] = this.elemento;
  }
  return this.mazo   
  }
  validar() {
    //sumatoria
    let filtro = this.nuevaBaraja.reduce(
      function(antes, ahora) {
          if (typeof(antes) == 'object') {
              if (antes > 10) {
                  return antes[0] + ahora;
              } else {
       return antes[1] + ahora;
              }
          } else {
              return antes + ahora;
          }

      })

  if (filtro == 21) {
      console.log('Ganaste! :)')
  } else if (filtro < 21) {
      console.log('Pide otra vez.. :3')
  } else if (filtro > 21) {
      console.log('Perdiste! :(')
  }
  console.log('el valor de la suma es'+filtro);
    
  }
}

class Jugador extends Fabrica{
  nuevaBaraja=[];
  contador=0;
  pedir(){

    this.nuevaBaraja.push(this.mazo[this.contador].valor);
        this.contador++;
        this.validar()
        return this.nuevaBaraja

    /* this.nuevaBaraja.forEach(element => {
      var ale= Math.round(Math.random()*52);
      console.log(element[ale])
    }); */
  }
}




