/*1. Formulario de contacto - Local Storage
Crear un formulario de contacto con los siguientes campos:
    Nombre
    Correo
    Mensaje

    Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
    Muestra el usuario que has guardado en el DOM*/
    //Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave*/

//EXTRAS

//Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
//Mostrar los datos de los contactos guardados en el DOM
//Crea un botón para borrar todos los contactos guardados en Local Storage


//////traslado del formulario a manipularlo en JS
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputMensage = document.getElementById('mensage')
const btnEnviar = document.getElementById('bottonSubmit')
const btnReset = document.getElementById('bottonReset')
console.log(btnEnviar);

//////funcion que le quiero dar al boton de enviar
let newUsers = 0 /////esto es para explicarlo el ej1 extra
function onSubmit(e) {
    newUsers = newUsers + 1;
    e.preventDefault()
    let datesUsers = {
        name: inputName.value,
        email: inputEmail.value,
        mensage: inputMensage.value
    }
    //////guardarlo en local Storage
    localStorage.setItem(newUsers, JSON.stringify(datesUsers))
    //////pasos para mostrarlo en el Dom
    let usuarioDom = document.createElement('div');
    document.body.appendChild (usuarioDom)
    usuarioDom.innerHTML = `<p>${datesUsers.name}</p> <p>${datesUsers.email}</p><p>${datesUsers.mensage}</p><hr>`
}
///////evento que se le aplica al boton 
btnEnviar.addEventListener('click', onSubmit)

function clearLS() {
    btnReset.addEventListener('click', localStorage.clear() )
}