// las clases son un molde que me va a permitir generar objetos concretos similares unos a otros 
// los metodos de las clases son funciones que tienen dichos objetos
class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo; 
        this.velocidad = velocidad; 
        this.antiguedad = antiguedad; 
    }
aumentarVelocidad() {
    this.velocidad += 1; 
}

reducirVelocidad() {
    this.velocidad -= 1; 
}

}

//HERENCIAS 

class Autobus extends Coche {
    constructor(modelo,velocidad,antiguedad) {
        super(modelo,velocidad,antiguedad)
        
        this.altura = 5;
    }
    mostrarAltura() {
        return "La altura del bus es:"+this.altura; 
    }
}

let autobus1 = new Autobus("PEGASO", 200,2023)
console.log(autobus1.mostrarAltura);

let coche1 = new Coche('BMW', 200,2017); 
let coche2 = new Coche("Audi", 100, 2018);
let coche3 = new Coche("Mercedes", 300, 2020); 

console.log (coche1);
// que pasa si ejecuto un metodo/función entre medias
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>");
coche1.aumentarVelocidad(); 
coche1.aumentarVelocidad(); 
coche1.aumentarVelocidad();  
console.log(coche1); 
// vemos como en el segundo consolelog el valor de la velocidad de coche1 ha aumentado de 200 a 203. 
//de esta manera es como a través de los métodos de los objetos es como podemos operar y modificar dichos objetos de una clase.


