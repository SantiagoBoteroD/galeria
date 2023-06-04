let bottonAnimal = document.getElementById("NombreSelector")
bottonAnimal.addEventListener('click', elegirAnimales)

function elegirAnimales() {
    let inputNombreUno = document.getElementById("Nombre-Uno")
    let inputNombreDos = document.getElementById("Nombre-Dos")
    let inputNombreTres = document.getElementById("Nombre-Tres")
    let inputNombreCuatro = document.getElementById("Nombre-Cuatro")
    let spanAnimal = document.getElementById("usuario")

    if (inputNombreUno.checked) {
        spanAnimal.innerHTML = "Perita martinez"
    }
    else if (inputNombreDos.checked) {
        spanAnimal.innerHTML = "yuliet pereira roldan"
    }
    else if (inputNombreTres.checked) {
        spanAnimal.innerHTML = "juanes roldan"
    }
    else if (inputNombreCuatro.checked) {
        spanAnimal.innerHTML = "juanes cuadrado"
    }
    else {alert ('debes elegir un nombre')
}
} 

let bottonCedula = document.getElementById("CedulaSelector")
bottonAnimal.addEventListener('click', elegirCedula)

function elegirCedula () {
    let inputCedulaUno = document.getElementById("TipoUno")
    let inputCedulaDos = document.getElementById("TipoDos")
    let spanSelecctor = document.getElementById("CedulaUsuario")

    
    if (inputCedulaUno.checked) {
        spanSelecctor.innerHTML = "Tarjeta de identidad"
    }
    else if (inputCedulaDos.checked) {
        spanSelecctor.innerHTML = "cedula ciudadana"
    }
    else {alert ('debes elegir un tipo de documento')
 }
}