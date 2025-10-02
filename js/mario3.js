
// 6. Fetch API con Promises: proporciona una interfaz para obtener datos a traves de la red. Es lo anterior a XMLHttpRequest

//los promises son objetos que tendremos a futuro

const url = 'https://jsonplaceholder.typicode.com/comments'  // JSON PLaceholder. JSON es JS Object Notation y es muy parecido a XML

fetch(url)  //hacemos peticion HTTP al servidor
    
    .then((respuesta) =>{

        if(respuesta.ok){   //este es uno de los estados HTTP q se muestra en Chrome
            return respuesta.json()  //convierte la respuesta a un objeto de JS
        }
        throw new Error("Ha habido un giro dramatico de los acontecimientos")  //si response no es ok se lanza un error que se captura con .catch despues
    })
    //acceso a otro promise, recordar q cada promise es como un paso
    .then(resultado =>console.log(resultado))  //resultado ahora es un array de objetos
    .catch(error => console.log(error.message))
    











// 7. Fetch API con Async Await

const consultarAPI=async()=>{ //async hace que la funcion sea asincrona, es decir q ejecute cosas mientras algo termina
    try{
        const response=await fetch(url)
        if(!response.ok){
            throw new Error("cago en la puta")
        }
        
        const datos=await response.json()
        console.log(datos)
    }catch(error){  //si alguna de las acciones que esta dentro del try falla, se ejecuta el catch
        console.log(error.message)
    }
}
consultarAPI();









// 8. Medir performance y manejar multiples consultas de tipo Async Await

const consultarAPII=async()=>{
    const inicio=performance.now();  //comienza a medir el performance
    
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    console.log(datos)

    const fin=performance.now() //finalizo
    console.log(`El resultado es ${fin-inicio} milisegundos`)
}

consultarAPII();



//ahora vamos a hacerlo con varias consultas
//basicamente es lo mismo pero agrupando primero los fetch en una promise y los json en otra
const url2="https://jsonplaceholder.typicode.com/todos"


const consultarAPIS=async() =>{
    const inicio=performance.now()

    const [response1,response2]= await Promise.all([fetch(url), fetch(url2)])  //esto va a hacer que los fetch comiencen al mismo tiempo

    const [datos1,datos2]=await Promise.all([response1.json(), response2.json()])
    
    console.log(datos1)
    console.log(datos2)

    const fin=performance.now();

    console.log(`El tiempo de la consulta multiple ha sido ${fin-inicio} milisegundos`)

}

consultarAPIS()