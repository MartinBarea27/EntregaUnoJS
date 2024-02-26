////////// UNO //////////

let num = prompt('Ejercicio Nº1 : Ingrese un número para saber si es par o impar')

function numParImpar (num) {
    if (num % 2 === 0) {
        console.log('Ejercicio Nº1')
        console.log('El número es par')
    } else{
        console.log('Ejercicio Nº1')
        console.log('El número es impar')
    }
}

numParImpar(num)


////////// DOS //////////

console.log('////////////////////////////////////////////////////////////')

let num2 = prompt('Ejercicio Nº2 : Ingrese un número para saber si es mayor que el siguiente')
let num3 = prompt('Ejercicio Nº2 : Ingrese el segundo número')

function numMayorQue (num2, num3) {
    if (num2 > num3) {
        console.log('Ejercicio Nº2')
        console.log(`El número ${num2} es mayor que el número ${num3}`)
    } else if(num3 > num2)  {
        console.log('Ejercicio Nº2')
        console.log(`El número ${num3} es mayor que el número ${num2}`)
    } else {
        console.log('Ejercicio Nº2')
        console.log('Los números son iguales')
    }
}

numMayorQue(num2, num3)

////////// TRES //////////

console.log('////////////////////////////////////////////////////////////')

let num4 = prompt('Ejercicio Nº3 : Ingrese un número para saber si es multiplo de 5')

function numMultiplo5 (num4) {
    if (num4 % 5 === 0) {
        console.log('Ejercicio Nº3')
        console.log('El número es multiplo de 5')
    } else{
        console.log('Ejercicio Nº3')
        console.log('El número no es multiplo de 5')
    }
}

numMultiplo5(num4)

////////// CUATRO //////////

console.log('////////////////////////////////////////////////////////////')

let num5 = prompt('Ejercicio Nº4 : Ingrese un número para mostrar todos los números hasta llegar a el')

function crearListaDeNumeros (num5) {
    for (let i = 0; i <= num5; i++ ){
        console.log(i)
    }
}


console.log('Ejercicio Nº4')
crearListaDeNumeros (num5)


////////// CINCO //////////

console.log('////////////////////////////////////////////////////////////')

let word1 = prompt('Ejercicio Nº5 : Ingrese una palabra')
let num6 = prompt('Ejercicio Nº5 : Ingrese el numero de veces que se repetira la palabra anterior')

function repetirPalabra (word1,num6) {
    for(let i = 0;i <num6;i++){
        console.log(word1)
    }
}

console.log('Ejercicio Nº5')
repetirPalabra (word1,num6)

////////// SEIS //////////

console.log('////////////////////////////////////////////////////////////')

let array = ['Yuji Itadori','Megumi Fushiguro','Nobara Kugisaki','Satoru Gojo']

function recorrerArray (array) {
    for(let i = 0; i<array.length;i++){
        console.log(array[i])
    }
}

console.log('Ejercicio Nº6')
console.log('Array de nombres:')
recorrerArray (array)

////////// SIETE //////////

console.log('////////////////////////////////////////////////////////////')

let array2 = [1,2,3,4,5,6,7,8,9,10]

function recorrerArrayMenos5taPosicion (array2){
    for(let i=0; i<array2.length;i++){
        if (i !== 4){
            console.log(array2[i])
        }
    }
}

console.log('Ejercicio Nº7')
console.log('Array de numeros menos el 5to:')
recorrerArrayMenos5taPosicion (array2)


////////// OCHO //////////

console.log('////////////////////////////////////////////////////////////')

let num7 = prompt('Ejercicio Nº8: Ingrese un numero para multiplicar cada valor de un array de 10 numeros')

function multiplicarArray(array2,num7) {
    for(let i=0;i<array2.length;i++){
        console.log(array2[i] * num7)
    }
}


console.log('Ejercicio Nº8')
console.log('Array de numeros multiplicados:')
multiplicarArray(array2,num7)