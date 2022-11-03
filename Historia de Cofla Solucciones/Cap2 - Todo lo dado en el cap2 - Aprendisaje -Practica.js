
// Temario del CAP 2:
// - Arrays
// - Arrays asosiativos
// - Bucles e iteración (While, For, etc...
// - Funciones

//-------------------------------------------------------------------

//ARRAYS ASOSIATIVOS EJEMPLOS
// let pc = {
//     nombre: "AlejoPC",
//     ram: "16GB",
//     procesador: "Intel core I5",
//     grafica: "Gt 1030",
// };

// let nombre = pc["nombre"];
// let ram = pc["ram"];
// let procesador = pc["procesador"];
// let grafica = pc["grafica"];



// let frase = `El nombre del pc es: <b> ${nombre}</b> <br>
//             La ram de tu pc es:<b> ${ram}</b> <br>
//             El procesador de tu pc es: <b>${procesador}</b> <br>
//             La grafica de tu pc es: <b>${grafica}</b> <br>`

// document.write(frase);

//-------------------------------------------------------------------


//Bucles e iteración (While, For, etc...//

//WHILE

// let numero1 = 0;

// el while primero pregunta si la sentencia es verdadera
// y lugo se ejecuta hasta que se convierta en falsa

// while (numero1 < 10) {
    
//     numero1++;
//     document.write(numero1 + "<br>");
// }

//-------------------------------------------------------------------


//DO WHILE

// el DO WHILE Primero ejecuta y luego pregunta, si la condicion
// es verdadera, se va a ejecutar hasta que se convierta en
// falsa la condicion, pero si o si ejecuta una vez al menos

// let numero1 = 0;

// do {
    
//     numero1++;

//     document.write(numero1);

// } while (numero1 > 10);

//-------------------------------------------------------------------

//BREAK

// La sentencia BREAK sirve para finalizar bucles, para
//dentener
// cualquier sentencia que se este ejecutando en bucle

// let numero = 0;

// while (numero < 100) {
//     numero++;
//     document.write(numero);
//     if (numero == 10) {
//         break;
//     }
// }

// document.write(`<br>frenamos el bucle con break cuando le
// dijimos que frenara en 10`);

//-------------------------------------------------------------------

// FOR

// El for se forma de tres partes, la declaracion de la variable,
// la sentencia a cumplir y el incremento o decremento

// for (let i = 1; i < 11; i++){

//     document.write(i + "<br>");
// }

//-------------------------------------------------------------------


// FOR IN y FOR OF

// let animales = ["pajaro", "Perro", "Gato"];

// Ambos for recorren el array , 

// la diferencia es que el FOR IN guarda la posicion que se encuentran 
// los objetos en el array,(guarda el numero de posicion ej: 0,1,2 etc...)
 
// y el FOR OF guarda el valor de la posicion, osea guarda el objeto que
// se guardo en esa posicion (ej: "pajaro", "Perro" etc...)


// for (animal in animales) {
//     document.write(animal + "<br>");
// }

// document.write("<br>");

// for (animal of animales) {
//     document.write(animal + "<br>");
// }

//-------------------------------------------------------------------

//FUNCIONES

//Pra inicializar una funcion hay que poner la palabra reservada
//"function" y luego de la palabra reservada va el nombre que le 
//damos a la funcion ej:

// function saludar(){
//     let saludo = prompt("hola, como estas?");
//     if (saludo == "bien") {
//         alert("Me Alegro");
//     } else {
//         alert("Que mal");
//     }
// }

// saludar();

//y para llamar la funcion y que funcione hay que llamarla como
//el ejempli de arriba, poniendo el nombre que le hallamos dado y
//cerrar con parentesis ( " saludar(); " )

//-------------------------------------------------------------------

// RETURN

//El return sirve para que la funcion nos devuelva un valor, para que
//a la hora de llamar a la funcion ese llamado se convierta en un tipo
//de dato, y no quede vacio solamente, a la hora de llamar a una 
//funcion el codigo de llamado ejemplo: (" edades() ") esta almacenando
//lo que la funcion esta retornando

// let edadJorge = 18;
// let edadMaria = 15;

// function edades(){
//     if (edadJorge >= 18) {

//         return `Podes pasar sos mayor, adelante Jorge`

//     } else {

//         return "sos menor Jorge"
//     }
// }

// let edad = edades();

// document.write(edad);

//-------------------------------------------------------------------

// PARAMETROS

//A la hora de crear una funcion, se crea los parametros deseados
//despues del nombre de la funcion, un ejemplo de como utilizar los
// parametros de puede ver abajo.
//luego para pasarle valores a esos parametros se hace cuando se 
//lama a la funcion, se llama a la funcion que tiene parametros y se
//le pasan los valores deseados

// function suma(num1,num2){
//     let res = num1 + num2;
//     return res;
// }

// let numeros = suma(20,20);

// document.write(numeros);

//-------------------------------------------------------------------

 //FUNCIONES FLECHA

//Hay otras formas de crear funciones, y mas practicas y mas utiles
//ejemplo las funciones flechas. Con las funciones flechas ejemplo
//si tenemos un parametro solo , no hace falta ponerle los parentesis
//o si tenemos un codigo solo para ejecutar dentro del bloque de la
//funcion, podemos ponerlo al costado de la flecha, y ahorrarnos
//lineas de codigo

//EJEMPLO DE COMO ES LA FUNCION FLECHA/ESCRITA

//  const saludar = (nombre)=> {
//     document.write("Hola como estas? " + nombre + "<br>");
//  }

// //EJEMPLO CON LOS BENEFICIOS
// const registro = apellido=> document.write("Mi apellido es: " + apellido);


// //LLAMADOS DE LA FUNCION Y PASARLE VALORES A LOS PARAMETROS
//  saludar("Alejo");

//  registro("Arias");