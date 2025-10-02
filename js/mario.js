console.log("Esta es la introduccion a JS");



// 1- VARIABLES let const
let client="Juan";
console.log(client);

const precio=100;
console.log(precio+precio*0.21); //incluyendo IVA
console.log(typeof precio) //nos dice el tipo de la variable

const descuento=true;
console.log(typeof descuento);



// 2- OBJETOS  (coleccion de propiedades)
const persona = {
    nombre:'Mario',   //todo esto es una propiedad
    edad:23,
    hombre:true
}
console.table(persona)  //para q se muestre en tabla
console.log(persona.edad);

// destructuring: para extraer un valor de un objeto
const {nombre,edad,hombre}=persona;
console.log(nombre);


// Object Literal Enhacement: para usar variables a un objeto nuevo
const sales=592000
const namee="Fearless";
const nuevoObjeto ={
    sales,
    namee
}


//manipular objetos  : object.freeze y object.seal
delete persona.edad


//unir dos o mas objetos
const producto={
    nombre:"iphone",
    precio:1300
}

const carrito={
    cantidad:1,
    ...producto  //spread operator, copia las propiedades de producto en el objeto carrito
}
console.table(carrito)

//esta es otra forma igual de unir objetos
const objetoUnido=Object.assign(producto,carrito)
console.table(objetoUnido)



console.log("\n\n\n--------------------------------------------\n\n\n\n")



// 3- TEMPLATE STRINGS Y CONCATENACION

const nom1="mario"
const ap1="sulé"
const ap2="dominguez"
console.log("te llamas "+ nom1+ap1+ap2);
console.log(`te llamas ${nom1} ${ap1}  ${ap2}`)




// 4- ARRAYS (pueden contener cualquier tipo)

const datos=[20,30, true, "mario"]

const nuevosDatos=[...datos, "añadido"] //uso esto para q en React no mute el arreglo

console.table(nuevosDatos);

//si quisiera quitar el valor 20 de mi primer array
const datos2=datos.filter(function(elementos){
    if(elementos!==20){
        return elementos
    }
})
console.log(datos2);

// basicamente la funcion de filter recorre todos los elementos de 'datos'
// y devuelve al array todos los datos que no sean 20



//ahora quiero modificar el valor 30 y cambiarlo a 31

const datos3=datos2.map(function(elementos){
    if(elementos===30){
        return 31;
    }
    else{  //hay q poner else pq itera todo el array
        return elementos
    }
})

console.log(datos3)




//Destructuring de arrays
const array=["hola", "adios", "jaja", "si" , "no"]
const primero=array[0]; //forma sencilla de hacerlo 

//imaginemos que quiero sacar el valor de si, hay que hacer el destructuring con la misma sintaxis q los objetos
const [ , , , afirmacion]=array
console.log(afirmacion)




//recorrer arrays con for (ojo el let y el array.length para q sea dinamico si se borran o añaden elementos)
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

array.forEach(function(elemento){   //forEach es lo que vamos a utilizar
    console.log(elemento)
})

array.map(function(elemento){
    console.log(elemento)
})

//la diferencia entre forEach y map es que map te genera un nuevo array y podemos usar ifs dentro


