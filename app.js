const btnIngresarPaciente = document.querySelector('#btn-ingresar')
const containerModal = document.querySelector('.container-modal')
const cerrarModal = document.querySelector('.cancel')
const cargarPacienteBoton = document.querySelector('#ingresar-paciente')
const contenidoFicha = document.querySelector('#contenido-ficha') //Declaré ***contenidoFicha*** de manera global


window.onload = function(){

    btnIngresarPaciente.onclick = llenarFormulario
    cerrarModal.onclick = cerrarFormulario
    cargarPacienteBoton.onclick = cargarPaciente
    


}

function llenarFormulario(){

    containerModal.classList.add('show')
    let limpiarFormulario = document.querySelector('form')
    limpiarFormulario.reset()  //Se crea variable limpiarFormulario y se le agrega el método .reset 
}

function cerrarFormulario(){
    containerModal.classList.remove('show')

}
////CARGAR DATOS/////
function cargarPaciente(evento){
    evento.preventDefault();

    let nuevoPaciente = {
        animal : document.querySelector('.animal').value,
        nombre : document.querySelector('.nombre').value,
        edad : document.querySelector('.edad').value,
        estado : document.querySelector('.estado').value,
        observaciones : document.querySelector('.observaciones').value
    }

    let filaPaciente = document.querySelector('.fila-paciente')
    let nuevaFila = filaPaciente.cloneNode(true)

    nuevaFila.children[0].innerHTML = nuevoPaciente.nombre
    nuevaFila.children[1].innerHTML = nuevoPaciente.animal
    nuevaFila.children[2].innerHTML = nuevoPaciente.estado
    nuevaFila.children[3].innerHTML = nuevoPaciente.edad
    nuevaFila.children[4].innerHTML = nuevoPaciente.observaciones
    nuevaFila.querySelector('.icon-ver').onclick = desplegarPaciente
    nuevaFila.querySelector('.icon-eliminar').onclick = eliminarPaciente

    let panelPacientes = document.querySelector('#panel-pacientes')
    
    panelPacientes.appendChild(nuevaFila)
    nuevaFila.classList.remove('no-display')
    

    cerrarFormulario()

    function desplegarPaciente(evento){
        nuevoPaciente.animal
        contenidoFicha.classList.remove('no-display')   
        contenidoFicha.children[0].src='img/animales/' + nuevoPaciente.animal + '.png'
        contenidoFicha.children[1].innerHTML = nuevoPaciente.nombre
        contenidoFicha.children[2].innerHTML = nuevoPaciente.edad //Se attachea (?) info restante
        contenidoFicha.children[3].innerHTML = nuevoPaciente.estado
        contenidoFicha.children[4].innerHTML = nuevoPaciente.observaciones

        
        }
    
    function eliminarPaciente(){         //Se programa Eliminar Paciente y quitar ficha del visor derecho
        nuevaFila.remove()

        if (
            contenidoFicha.children[1].innerText ===
            nuevaFila.children[0].innerText
        ) {

            contenidoFicha.classList.add('no-display') // No estoy seguro de que sea la implementación más óptima, aunque me pareció la más sencilla.
        }
    }
    
}



