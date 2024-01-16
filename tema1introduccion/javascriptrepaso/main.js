alert ("Hola soy un alienigena");

let nombre = "San Agustin"; 
nombre = "sanagustin";

// constantes 
const apellido = "Filósofo"
const altura = 187; 

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