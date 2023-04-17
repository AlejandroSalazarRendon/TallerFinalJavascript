function cambiarTema(tema) {
    var listaFrutas = document.getElementById("lista-frutas");
    if (tema === 1) {
        listaFrutas.className = "tema-1";
    } else if (tema === 2) {
        listaFrutas.className = "tema-2";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
      document.getElementById('alerta').style.display = 'block';
      document.getElementById('alerta').innerText = 'Por favor complete todos los campos.';
    } else {
      console.log('Nombre: ' + nombre);
      console.log('Correo: ' + correo);
      console.log('Asunto: ' + asunto);
      console.log('Mensaje: ' + mensaje);
      document.getElementById('alerta').style.display = 'none';
    }
  });
  
  document.getElementById('contactForm').addEventListener('reset', function() {
    document.getElementById('alerta').style.display = 'none';
  });