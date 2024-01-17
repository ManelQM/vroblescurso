// alert ("Hola soy un alienigena");

let nombre = "sanagustin"; 
nombre = "San Agustin";

// constantes 
const apellido = "Filósofo"
let altura = 187; 

//concatenacion 

let concatenacion = nombre + " " + apellido;

console.log(nombre);
console.log(altura);

/* llamar a elementos del dom (html)*/

let datos = document.querySelector("#datos"); 
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es:${nombre} ${apellido}</h2>
`;

/*PARTE DOS JAVASCRIPT REPASO 2*/

// condiciones

if (altura>= 185) {
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}else {
    datos.innerHTML += "<h1>Eres una persona baja</h1>"
}

//bucles son estructuras de control que nos permiten repetir un código hasta que se ejecute la condición 
for(let year = 2000; year <= 2023; year ++) {
    datos.innerHTML += `<h1>Estamos en el año: ${year}</h2>`; 
}

//arrays. Son colecciones de variables a las cuales podemos acceder a través de una serie de metodos.

let nombres = ["Jose", "Vicente", "Aitor"]; 

let divNombres = document.querySelector("#nombres"); 

//divNombres.innerHTML = nombres[2];
//forEach y forOf
divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>"; 

// nombres.forEach(nombre => {
//     divNombres.innerHTML += "<li>" +nombre+"</li>";
// }); 

for (let nombre of nombres) {
    divNombres.innerHTML += "<li>"+nombre+"</li>"; 
}

divNombres.innerHTML += "</ul>"; 

//funciones 

const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Soy la caja de los datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}cm</h3>

    `;
    return misDatos; 
}; 

console.log(miInformacion("Manel", 183)); 

//para imprimirlo por pantalla y ejecutar nuestra funcion

const imprimir = () => {
    let datos = document.querySelector("#datos"); 
    datos.innerHTML = miInformacion("paco", 190)
}; 

imprimir();


//objetos JSON o literales

let coche = {
    modelo: "Mercedes Clase A",
    maxima: 500,
    antiguedad: 2020,
    //podemos crear metodos como el que sigue
    mostrarDatos() {
        console.log (this.modelo,this.maxima,this.antiguedad)
    },
    propiedad1: "Valor aleatorio"
}; 

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos; 

//PROMESAS: capturamos la respuesta positiva de una petición o también si la petición es rechazada. 

let saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        let saludo = "Hola muy buenas a todos chavales"
        // saludo = false; 
        if(saludo) {
            resolve(saludo); 
        }else {
            reject("No hay saludo que valga hoy"); 
        }
    }, 2000)
}); 

saludar.then(resultado=> {
    alert(resultado); 
}).catch(err => {
    alert(err); 
}); 