console.log("FUNCIONES")


// 1. FUNCIONES

function sumar(num1,num2){
    console.log(num1+num2)   //se podria hacer con return tambien
}
sumar(3,7)


// arrow functions: funcionan bien con los array methods
const multiplicacion=(num1,num2) =>{
    return num1*num2
}
const res=multiplicacion(9,6)
console.log(res)

//esta arrow function se podria simplificar asi:
// const multiplicacion=(num1,num2) => num1*num2











//2. ARRAY METHODS
 
// ya vimos filter para crear un array nuevo con los elementos q cumplan una condicion en base a una funcion

const numeros=[10,20,30]

const nuevoArray=numeros.filter((elemento) => elemento !==20)  //esto es que haga RETURN de todos aquellos elementos que no sean 20
console.table(nuevoArray)

// includes
const incluyeTreinta=numeros.includes(30)
console.log(incluyeTreinta)  //saca true por que el elemento 30 esta en el array numeros

// some: devuelve true si al menos un elemento cumple la condicion
const hayMayor=numeros.some(elemento => elemento>15)
console.log(hayMayor)

//find: devuelve el primer elemento q cumpla una condicion
const encuentra=numeros.find( elemento => elemento>11)
console.log(encuentra)

//every: devuelve true si TODOS cumplen la condicion
const todos=numeros.every(elemento => elemento>25);
console.log(todos)

//reduce: retorna un acumulado del total (x ejemplo en un carrito de compras para mostrarle al usuario el total de todos los elementos q hay en su carrito )
const r=numeros.reduce((acumulado,elemento) => acumulado+elemento, 0)  // el 0 es el valor inicial del acumulado
console.log(r)  //muestra 60 q es el acumulado total


console.log("\n\n-------------COSAS SENCILLITAS-------------\n\n")









// 3. Condicionales
//const numero1=20    y    const numero2="20"    a ojos del operador == son iguales, pero a los del estricto === NO son iguales

//ternarios
const saldo=100
const pagar=500
const tarjeta=true
const auth=false

auth ? console.log("auth correcto") : console.log("auth incorrecto")
saldo>pagar || tarjeta ? console.log("si") : console.log("no")

//con un else if seria asi:
saldo>pagar ? console.log("si") :
tarjeta ? console.log("si, con tarjeta puedes") :
console.log("no")





// 4. Optional chaining ? y Nullish coalescing operator ??

const alumno={
    nombre:"george",
    clase:"science",
    aprobado:true
}

console.log(alumno.examenes?.examen1)  //existe examenes? si no existe sigue pa lante y se la pela
console.log(alumno)

const apellido="sulé" ?? 1  //si es null va a tener el valor de 1, y si no mantiene el valor original
console.log(apellido)




// truthy es que un campo exista, sea una variable un array vacio etc
// falsy es null undefined false 0 ""
const user="usuario1"
user && console.log("usuario autenticado")  //es como escribir un if de forma corta. Si user fuese null, undefined o algo asi no se ejecutaria nada




// 5. MODULOS DE ECMAScript: para organizar codigo y funciones en archivos separados y exportar lo q se necesite entre ellos

import funcionPrincipal, {restar,dividir as funcionDividir} from './funcioness.js'
console.log(restar(7,1))
console.log(funcionDividir(70,4))
console.log(funcionPrincipal(5))

