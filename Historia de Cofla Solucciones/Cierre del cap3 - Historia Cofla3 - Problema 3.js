//Problema 1: 
// - Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
// - Cada celular debe tener color , peso, resolucion de pantalla , resolucion de camara y memoria ram
// - cada celular debe poder prender , reiniciar, apagar, tomar fotos y grabar


// class celulares {
//     constructor(color,peso,rp,rc,ram){
//         this.color =  color;
//         this.peso = peso;
//         this.rp = rp;
//         this.rc = rc;
//         this.ram = ram;
//         this.encendido = false;
//     }

//     verInfo(){
//         return `-------GAMA BAJA-------: <br>
//         color: <b>${this.color}</b> <br>
//         peso: <b>${this.peso}</b> <br>
//         Resolucion de Pantalla: <b>${this.rp}</b> <br>
//         Resolucion de Camara: <b>${this.rc}</b> <br>
//         RAM: <b>${this.ram} <br>
//         --------------: <br>`
//     }

//     botonEncendido(){

//         if (this.encendido == false) {
//             alert("celular encendido");
//             this.encendido = true
//         } else {
//             alert("El celular ya esta apagado");
//             this.encendido = false
//         }
//     }

//     reiniciar(){

//         if (this.encendido == true) {
//             alert("Reiniciando..");
//         } else {
//             alert("El celular ya esta apagado")
//         }

//     }

//     tomarFotos(){
//         alert("El celular a sacado una foto...");
//     }

//     grabar(){
//         alert("El celular esta grabando...");
//     }
// }

//-----------------------------------------------------------------------------------

// Problema 2: 
// - Crear dos celulares de alta gama con las mismas cualidades que los anteriores , pero tienen mejores carateristicas
// - pueden grabar en camara super lenta , tiene  reconocimiento facial y una cama extra

// class celuaresAltaGama extends celulares{
//     constructor(color,peso,rp,rc,ram,cx){
//         super(color,peso,rp,rc,ram);
//         this.camaraExtra = cx;

//     }

//     camaraLenta(){
//         alert("grabando en camara super lenta...");
//     }

//     reconocimientoFacial(){
//         alert("Reconociendo rostro...");
//     }


//     verInfoGamaAlta(){
//         return ` <br>
//         -------GAMA ALTA: -------: <br>
//         color: <b>${this.color}</b> <br>
//         peso: <b>${this.peso}</b> <br>
//         Resolucion de Pantalla: <b>${this.rp}</b> <br>
//         Resolucion de Camara: <b>${this.rc}</b> <br>
//         Resolucion de Camara Extra: <b>${this.camaraExtra} <br>
//         RAM: <b>${this.ram} <br>
//         --------------: <br>
//         `
//     }

// } 

//gama baja
// const celular1 = new celulares("gris", "14g", "1.4p", "12mpx", "2");
// const celular2 = new celulares("dorado", "12g", "1.0p", "15mpx", "4");
// const celular3 = new celulares("negro", "15g", "1.3p", "10mpx", "3");

//Info GAMA BAJA
// document.write(`
// ${celular1.verInfo()}
// ${celular2.verInfo()}
// ${celular3.verInfo()}`);

// celular1.botonEncendido();
// celular1.tomarFotos();
// celular1.grabar();
// celular1.botonEncendido();

//gama Alta
// const celularG1 = new celuaresAltaGama("gris", "155g", "full hd", "20mpx", "5", "14mpx");
// const celularG2 = new celuaresAltaGama("rojo", "130g", "full hd k4", "30mpx", "7" , "19mpx");

//INFO GAMA ALTA
// document.write(`
// ${celularG1.verInfoGamaAlta()} <br>
// ${celularG2.verInfoGamaAlta()} <br>`);

//-----------------------------------------------------------------------------------------
// PROBLEMA 3:
// - crear un sistema que ayude a cofla a decidir que app descargar
// - la informacion de los instaladores debe contender la cantida de descargas y la puntacion y el peso
// - la apps debe poder instalar, abrir , cerrar y desinstalar.

class Apps {
    constructor(descargas, puntacion, peso){
        this.descargas = descargas;
        this.puntacion = puntacion;
        this.peso = peso;
        this.iniciar = false;
        this.instalada = false;
    }

    abrir(){

        if (this.iniciar == false && this.instalada == true) {
            this.iniciar = true;
            alert("iniciando APP...");
        }
    }

    instalar(){

        if (this.instalada == false) {
            this.instalada = true;
            alert("APP instalada correctamente");
        }
    }

    cerrar(){

        if (this.iniciar == true) {
            this.iniciar = false;
            alert("APP Cerrada");
        }
    }

    desintalar(){
        
        if (this.instalada == true) {
            this.desintalar = false;
            alert("APP Desintalada correctamente");
        }
    }

    mostrarInfo(){
        return `
        Descargas: <b>${this.descargas}</b> <br>
        Puntacion: <b>${this.puntacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>`
    }
}

const apli = new Apps("16.00", "5 estrellas", "12mb");
const apli2 = new Apps("1.00", "2 estrellas", "900mb");
const apli3 = new Apps("6.00", "6 estrellas", "400mb");
const apli4 = new Apps("56.00", "8 estrellas", "220mb");
const apli5 = new Apps("60.00", "9 estrellas", "820mb");
const apli6 = new Apps("90.00", "1 estrellas", "320mb");
const apli7 = new Apps("2.00", "5 estrellas", "1200mb");

document.write(`
${apli.mostrarInfo()} <br>
${apli2.mostrarInfo()} <br>
${apli3.mostrarInfo()} <br>
${apli4.mostrarInfo()} <br>
${apli5.mostrarInfo()} <br>
${apli6.mostrarInfo()} <br>
${apli7.mostrarInfo()}`)

apli.instalar();
apli.abrir();
apli.cerrar();
apli.desintalar();


