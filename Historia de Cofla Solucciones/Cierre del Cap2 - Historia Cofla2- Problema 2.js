//-Dejar pasar solo a los mayores de edad
//- La primera persona que entre despues de las 2 AM, no paga 
//------------------------------------------------------------------

// const validarEntrada = hora => {
//     let edad;
//     //Autienticacion de edad
//     edad = prompt("Que edad tenes");
//     if (edad > 18) {
//         if (hora >= 2 && hora < 7) {
//             document.write("Podes pasar, son mas de las 2 am");
//         } else {
//             document.write("Podes pasar , pero tenes que pagar entrada");
//         }
        
        
//     } else {
//         document.write("Sos menor, no podes pasar de ninguna manera");
//     }
// }

// validarEntrada(6);

// ---------------------------------------------------------------

// 2do Problema de la historia
// Crear una calculadora que nos simplifique el problema

//  const sumar = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
//  }

//  const resta = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2);
//  }

//  const multi = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2);
//  }

//  const division = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
//  }


//  numero1 = prompt("Ingrese el primer numero: ");
//  numero2 = prompt("Ingrese el segundo numero: ");

//  let resultado1 = sumar(numero1,numero2);
//  let resultado2 = resta(numero1,numero2);
//  let resultado3 = multi(numero1,numero2);
//  let resultado4 = division(numero1,numero2);

//  document.write(`Suma: ${resultado1}}<br>
//                 Resta: ${resultado2}<br>
//                 Multiplicacion: ${resultado3}<br>
//                 Division: ${resultado4}`);