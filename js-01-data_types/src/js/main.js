/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas
  Recomendaciones para el uso de las funciones:
- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.
*/

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
*/

console.log( saludar("Erick") );
console.log( saludar("Serch") );
console.log( saludar("Arely") );
function saludar( nombre){
    return `Hola ${nombre}, soy una función declarada`;
}
// En la función anterior saludar()
// Agregar el parámetro nombre y mostrar "Hola nombre, soy una función declarada"

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

console.log (sumarDosNumeros(3,6));
// Realizar una función declarada que sume dos números, retorna el resultado de la suma
function sumar(num1, num2) {
    return num1 + num2;
  }

  // Realizar una función declarada que sume dos números, retorna el resultado de la suma
const sumarDosNumeros = function suma(num1, num2){
    return num1 + num2;
};
console.log( sumarDosNumeros(3,6) ); // 9
let hora = 10;
let saludarDependiendoHora;
if(hora < 12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    };
} else {
  saludarDependiendoHora = function(){
        return "Buenas tardes";
    };
}
console.log saludarDependiendoHora();

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos );
*/
( function setUp( name ) {
    console.log(`Hola ${name}, soy una función autoinvocada`);
})( "Erick" );


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
//Realizar una función declarada que calcule el área de un rectángulo
function areaRectangulo(ladoA, ladoB){
    return ladoA*ladoB;
}
// Convertir la funcion anterior a una función expresada
const calcularAreaRectangulo = function(base, altura) { return base * altura; };
// Convertir la función anterior a una función flecha
const rectangleArea = (height, width) => height * width;
console.log(`El área del rectángulo es : ${rectangleArea(10, 6)} cm2`);


 // Arrow function que reciba un parámetro y lo imprima en consola
 const mensajeConsola = mensaje => console.log(mensaje);
 /** 
  Arrow function que reciba un parámetro y lo imprima con alert
  @param {string} mensaje mensaje a imprimir
 */ 
 const mensajeAlert = mensaje => alert(mensaje);
 /**
  * Función que imprime en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */
 const imprimirMensaje = (mensaje = "Hola", opcion = "consola") => {
    if (opcion === "consola") {
      mensajeConsola(mensaje);
    } else if (opcion === "alert") {
      mensajeAlert(mensaje);
    }
  };
  imprimirMensaje("Hola Lisset", "alert");
  imprimirMensaje("Hola Serch", "alert");
  imprimirMensaje("Hola Kati");