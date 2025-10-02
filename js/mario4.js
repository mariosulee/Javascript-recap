console.log("MANIPULACION DEL DOM")

// 1. SELECTORES (como si fuese CSS) siempre comienzan con document

const heading = document.querySelector(".heading") //heading es el nombre de la clase del <h1> //recordar que en css .clase y #id

//ya puedo acceder a los atributos de ese elemento como el tagName
console.log(heading.tagName)  //eso muestra h1
console.log(heading.textContent)  //muestra el texto que tiene el h1


const enlaces=document.querySelectorAll('.navegacion a')  //la a es para seleccionar los enlaces <a>
console.log(enlaces)

//si aqui hubiese usado querySelector solo me saldria el primer elemento, por eso querySelectorAll










// 2. MANIPULACION/EDICION de elementos HTML con JS

heading.textContent="Taylor Swift"
heading.id=69   //cambio el id a 23 y esto se cambia en el DOM.html

heading.removeAttribute("id") // esto elimina el id a <h1>

const porDefecto=document.querySelector("#nombre")  //con el id nombre en el formulario cambio el texto por defecto que muestra
porDefecto.value="username"


//para manipular algun enlace
enlaces[0].textContent="Buy Now"  //cambio el texto del primer enlace usando un array pq hay cuatro enlaces

//para manipular todos los enlaces
enlaces.forEach(enlace => enlace.textContent="October 3")












// 3. Eventos del DOM : onClick

const letrero=document.querySelector(".heading")

letrero.addEventListener("click", () => {   //esto es lo q se conoce como un CALLBACK, que espera a q ocurra un evento y luego se dispara la funcion
    letrero.textContent="THE MUSIC INDUSTRY"
})
//click, dblclick, mouseleave


//para manipular muchos elementos
enlaces.forEach(enlace=>{
    enlace.addEventListener('click', ()=>{
        console.log("diste click en un enlace")
        enlace.textContent="ya visitado"
    })
})











// 4. Eventos de formularios: inputs y submit
const inputNombre=document.querySelector("#nombre")
//para leer lo q el usuario va escribiendo
inputNombre.addEventListener('input', (e)=>{  //e es el objeto evento q tiene informacion sobre lo que ha pasado
    console.log(e.target.value) // target es lo que disparó el evento. el value viene del atributo en el HTML.
})


const inputPassword=document.querySelector("#password")
inputPassword.addEventListener('input', hacerVerPassword)  //tb se puede hacer asi

function hacerVerPassword(){
    inputPassword.type="text"   //el tipo ya no es password q es como sale en HTML

    setTimeout(()=>{
        inputPassword.type="password" //lo oculto otra vez a los 0.5 segundos
    }, 500)

}


// evento submit
const formulario=document.querySelector("#formulario")
formulario.addEventListener("submit", e =>{
    e.preventDefault(); //para que no me lleve al inicio
    
    const nombre=document.querySelector("#nombre").value
    const password=document.querySelector("#password").value
    console.log(nombre)
    console.log(password)

    console.log("enviando formulario...")




    
    // 5. Validacion de formularios y alertas
    const alerta=document.createElement('DIV') //esto lo q va a hacer es crear codigo de HTML a traves de JS
    alerta.classList.add('alerta1','text-white', 'uppercase', 'text-sm', 'font-back')  //le añado clases CSS al div

    if(nombre==='' || password===''){
        alerta.textContent="Todos los campos tienen que ser obligatorios"
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent="Todo correcto"
        alerta.classList.add('bg-green-500')
    }

    formulario.appendChild(alerta)   //agregarle un hijo

    setTimeout(()=>{
        alerta.remove() //elimino el elemento del html
    },2000)

})










