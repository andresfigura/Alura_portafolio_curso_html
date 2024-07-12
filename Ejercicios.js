
/*
              __                     .__       .__              
           ____     |__| ___________   ____ |__| ____ |__| ____  ______
         _/ __ \    |  |/ __ \_  __ \_/ ___\|  |/ ___\|  |/  _ \/  ___/
         \  ___/    |  \  ___/|  | \/\  \___|  \  \___|  (  <_> )___ \ 
          \___  >\__|  |\___  >__|    \___  >__|\___  >__|\____/____  >
              \/\______|    \/            \/        \/              \/ 
                     .__       .__             _____             
                ____ |__| ____ |  |   ____   _/ ____\___________ 
              _/ ___\|  |/ ___\|  |  /  _ \  \   __\/  _ \_  __ \
              \  \___|  \  \___|  |_(  <_> )  |  | (  <_> )  | \/
               \___  >__|\___  >____/\____/   |__|  \____/|__|   
                   \/        \/                                  

*/

/*1) Usando un bucle for escribir un script que le pida al usuario un valor entero y muestre en pantalla un lista de numeros desde el 0 hasta el valor tecleado. los numeros se separan por comas*/

// // let numeroEjercicio1 = parseInt(prompt("ingrese un numero entero"));
// // let conteoDeNumeroAscendente = '';
// // let i;
// // for(i = 0; i< numeroEjercicio1; i++){
// //     conteoDeNumeroAscendente += `${i},`
// // }

// console.log(conteoDeNumeroAscendente +`${i} `)

/* 2)Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0 */ 

// let numeroEjercicio2 = parseInt(prompt("ingrese un numero entero"));
// let conteoDeNumeroDescendente = '';
// let i1 = 0;
// for(numeroEjercicio2; numeroEjercicio2 > i1; numeroEjercicio2--){
//     conteoDeNumeroDescendente += `${numeroEjercicio2},`
// }
// console.log(conteoDeNumeroDescendente +`${numeroEjercicio2} `)

/*3) Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').*/

// let numeroUsuario = parseInt(prompt("digite un numero"));
// let lista = '';
// let numeroResultado;
// let i = 0;
// if (numeroUsuario % 2 == 0) {
//     for(i; i<(numeroUsuario/2); i++){
//         numeroResultado = i*2;
//         lista += numeroResultado + "\n"
//         console.log(numeroResultado)
//     }
//     alert(lista)
// }

// if(numeroResultado%2 !=0){
//     numeroUsuario = numeroUsuario + 1;
//     for(i; i<(numeroUsuario/2); i++){
//         numeroResultado = i*2;
//         lista += numeroResultado + "\n"
//         console.log(numeroResultado)
//     }
//     alert(lista)

// }

/*4) Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n"*/

    // let numeroUsuario = parseInt(prompt('ingrese un numero'));
    // let lista = '';
    // let i = 0;
    // for(i;i<=10;i++){
    //     lista += `${numeroUsuario} x ${i} = ${numeroUsuario*i}\n`
    // }
    // console.log(lista);

/*5)En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.*/

// let numeroUsuario = parseInt(prompt("digite un numuero"));
// let lista = "";
// let i = 0;
// let numeroEvaluado
// for(i;i<numeroUsuario;i++){
//     numeroEvaluado = i%3;
//     if(numeroEvaluado % 3 == 2){
//         lista += `${i}, `;
//     }
// }
// console.log(lista + numeroUsuario)
/*6) Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. ej. si teclea 5 y la letra p entonces debe mostrar por consola ppppp */

// let numeroUsuario = parseInt(prompt("digite un numuero"));
// let letraUsuario = prompt('digite una letra');
// let lista = "";
// let i = 0;
// for(i;i<=numeroUsuario;i++){
//     lista += letraUsuario
// }
// console.log(lista)

/*7) Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4 */


// let i = 0;
// let j = 0;

//     for(i; i<2; i++){
//         for(j; j<5; j++){
//             console.log(`${i}:${j}`);
//         }
//     }


//8) Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

// Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

// let x = parseInt(prompt("ingrese un numero del 1 al 10"));
// let cadena;
// for(let i = 0; i<x; i++){
//     cadena = ' '
//     for(let j=0; j<= i;j++){
//         cadena += '*';
//     }
//     console.log(cadenna,'\n');
// }

/*9) Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma" */

// let numeroUsuario = parseInt(prompt("digite un numuero"));
// let suma = 0;
// let i = 0;
// for(i; i<=  numeroUsuario; i++){
//     suma += i;
// }
// console.log(`Los numeros de 0 a ${numeroUsuario} suman ${suma}`);

/*10) Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

// let numeroUsuario;
// let suma = 0;
// let i = 0;
// for(i;i<4;i++){
//     numeroUsuario = parseInt(prompt("digite un numuero"));
//     suma +=numeroUsuario
// }
// let media = suma/4
// console.log(`la media de los 4 digitos es ${media}`);
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/