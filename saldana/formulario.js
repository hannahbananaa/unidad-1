document.getElementById('formulario').onsubmit = function(event) {
    event.preventDefault(); 
    let nombre = document.getElementById('nombre').value;
    let cal1 = parseFloat(document.getElementById('calificacion1').value);
    let cal2 = parseFloat(document.getElementById('calificacion2').value);
    let cal3 = parseFloat(document.getElementById('calificacion3').value);
  
  
    let promedioCalificaciones = (cal1 + cal2 + cal3) / 3;
    let baseCalificacion = promedioCalificaciones * 0.65;  

 
    let participaciones = document.querySelector('input[name="participaciones"]:checked');
    let participacionValor = participaciones ? parseInt(participaciones.value) : 0;
    let ajusteParticipacion = participacionValor * 0.10;
  

    let actividades = document.querySelectorAll('input[name="actividad"]:checked');
    let valorActividades = actividades.length * 0.25; 
  
 
    let sumaPorcentajes = baseCalificacion + ajusteParticipacion + valorActividades;
    let calificacionFinal = Math.min(10, sumaPorcentajes);  
  
   
    document.getElementById('resultado').innerHTML = `
      El alumno: ${nombre} con promedio de: ${promedioCalificaciones.toFixed(2)}
      <br>su calificación final fue: ${calificacionFinal.toFixed(2)}
    `;
  };