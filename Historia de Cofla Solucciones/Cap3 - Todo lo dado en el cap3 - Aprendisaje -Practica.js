// POO - Programacion orientada a objetos
//Conceptos basicos de POO:

//CLASE: La clase es como para poner de ejemplo una fabrica que crea objetos
//dentro de ella es donde se crean los objetos

//ATRIBUTOS: Son las carateristicas que tiene nuestro objeto

//METODO: son las cosas que puede hacer nuesto objeto

//CONSTRUCTOR:El construcotr es una funcion obligatoria , cuando creamos
//una clase tenemos que crear un construcotr que nos va a construir 
//las propiedades del objeto

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `
//                     La especie es: ${this.especie} <br>
//                     La edad: ${this.edad} <br>
//                     el color: ${this.color} `;

        //This: es el objeto, cuando ponemos this.especie le estamos
        //diciendo que el objeto va a tener una caracteristica, que esa
        //carateristica va a ser la que igualamos, la que esta en el
        //constructor.

        // es decir, this.especie va a ser igual a especie,
        //del construcor
    //}
    //Esto es un metodo, es como una funcion, lo unico que dentro de una clase
    //se llama metodo y fuera se llama funcion.
    //Los metodos se escriben fuera del construcotr pero dentro de la clase
    
    //Los metodos son las cosas que va a hacer nuestro objeto, las accione
    //que nuestro objeto puede hacer 
//     informacion(){
//         document.write(this.info);
//     }
// }

//el new lo que hace es crear un objeto de la clase, lo que esta diciendo
//el codigo de abajo es que perro va a ser un objeto de la clase animal

// let perro = new animal("perro",5,"rojo");
// let gato = new animal("gato",10,"negro");
// let pajaro = new animal("pajaro",1,"verde");

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);

// perro.informacion();
// gato.informacion();
// pajaro.informacion();

//-------------------------------------------------------------------

//Otros Conceptos de POO
//- Herencias, - Metodos estaticos. - Metodos Accesores(Getters y Setters)

//HERENCIAS

//Esto es una clase noraml, para heredar lo que hay en la clase Animal a una nueva hay que
//usar la palabra reservada "extends", para heredar los atrubutos y metodos de esta clase

// class Animal {
//     constructor(especie,edad,color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.info = `
//                 La especie es: ${this.especie} <br>
//                 La edad: ${this.edad} <br>
//                 el color: ${this.color} `;
//     }

//     info(){
//         document.write(this.info);
//     }
// }

//EJ:
//Aca la nueva clase "Perro" esta heredando los atrubutos del construcot y los metodos
//De la clase "Animal"

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
        //La palabra "super" se usa para heredar los atrubitos del constructor de la clase padres
    //     super(especie,edad,color);
    //     this.raza
    // }

    // ladrar(){
    //     alert("WAW");
    // }
//}

// let perro = new Perro("perro",5,"rojo","Doberman");

// perro.ladrar();

//----------------------------------------------------------------------------

// Getters y Setters

// Los metodos "Getters" son para obtener un valor
// los metodos "Setters" son para modificarlo o definirlo

// class Auto{
//     constructor(marca,modelo,color){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.color = null;
//     }

    //los setters llevan un parametro que va a ser el que va
    //a ser modificado en el objeto fuera de la clase
    //en " fiat.setColor = "azul" " es donde el parametro del setter va a ser modificado

    // set setColor(newColor){
    //     this.color = newColor;
    // }

    //Los getters no llevan parametros, solo guardan el objeto
    //obtienen el valor de "this.color" y lo retornan, osea lo guardan
    //guardan lo que this.color tenga

    // get getColor(){
    //     return this.color;
    // }

    
//}

// aca estamos creando un objeto de la clase auto

// const fiat = new Auto("fiat",2004,"rojo");

// aca estamos llamando al metodo setter de la clase auto para modificarle parametro "newColor"
// y definirle un valor

// fiat.setColor = "azul"

// en esta linea de codigo se esta mostrando el valor guardado en el getter

// document.write(fiat.getColor);

