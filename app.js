const btnIngresarPaciente = document.querySelector('#btn-ingresar')
const containerModal = document.querySelector('.container-modal')
const cerrarModal = document.querySelector('.cancel')
const cargarPacienteBoton = document.querySelector('#ingresar-paciente')


window.onload = function(){

    btnIngresarPaciente.onclick = llenarFormulario
    cerrarModal.onclick = cerrarFormulario
    cargarPacienteBoton.onclick = cargarPaciente
    


}

function llenarFormulario(){

    containerModal.classList.add('show')
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
        let contenidoFicha = document.querySelector('#contenido-ficha')
        nuevoPaciente.animal
        contenidoFicha.classList.remove('no-display')
        contenidoFicha.children[0].src='img/animales/' + nuevoPaciente.animal + '.png'
        contenidoFicha.children[1].innerHTML = nuevoPaciente.nombre
        
        }
    
    function eliminarPaciente(){

    }
    
}



