'use strict';

console.log('app.js cargado correctamente');

const btnMensaje   = document.querySelector('#btn-mensaje');
const btnPromedio  = document.querySelector('#btn-promedio');
const btnLimpiar   = document.querySelector('#btn-limpiar');
const resultado    = document.querySelector('#resultado');
const formAlumno   = document.querySelector('#form-alumno');

let alumnos = [];
let siguienteId = 1;

function mostrarResultado(mensaje, tipo = 'ok') {
  resultado.textContent = mensaje;
  resultado.classList.remove('ok', 'error');
  resultado.classList.add('visible', tipo);
}

function render() {
  const tbody = document.querySelector('#tabla-alumnos tbody');
  tbody.innerHTML = '';

  if (alumnos.length === 0) {
    const filaVacia = document.createElement('tr');
    filaVacia.innerHTML = `<td colspan="5" class="vacio">Sin alumnos registrados</td>`;
    tbody.appendChild(filaVacia);
    actualizarResumen();
    return;
  }

  alumnos.forEach((alumno) => {
    const fila = document.createElement('tr');
    fila.dataset.id = alumno.id;

    fila.innerHTML = `
      <td>${alumno.matricula}</td>
      <td>${alumno.nombre}</td>
      <td>${alumno.edad}</td>
      <td>${alumno.correo}</td>
      <td class="acciones">
        <button class="btn-editar" data-accion="editar">Editar</button>
        <button class="btn-eliminar" data-accion="eliminar">Eliminar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });

  actualizarResumen();
}

function actualizarResumen() {
  document.querySelector('#total-alumnos').textContent = alumnos.length;

  const ultimo = alumnos[alumnos.length - 1];
  document.querySelector('#ultimo-alumno').textContent = ultimo ? ultimo.nombre : '—';
}

function eliminarAlumno(id) {
  if (!confirm('¿Eliminar este alumno?')) return;
  alumnos = alumnos.filter(a => a.id !== id);
  render();
}

function editarAlumno(id) {
  const alumno = alumnos.find(a => a.id === id);
  if (!alumno) return;

  const nuevoNombre = prompt('Nuevo nombre:', alumno.nombre);
  if (nuevoNombre === null) return;

  const nuevaEdad = prompt('Nueva edad:', alumno.edad);
  if (nuevaEdad === null) return;

  alumno.nombre = nuevoNombre.trim() || alumno.nombre;
  alumno.edad = Number(nuevaEdad) || alumno.edad;

  render();
}

btnMensaje.addEventListener('click', () => {
  if (resultado.classList.contains('visible')) {
    resultado.classList.remove('visible');
  } else {
    mostrarResultado('¡Hola! Este mensaje vive solo en el navegador.', 'ok');
  }
});

formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre    = document.querySelector('#nombre').value.trim();
  const matricula = document.querySelector('#matricula').value.trim();
  const edad      = Number(document.querySelector('#edad').value);
  const correo    = document.querySelector('#correo').value.trim();

  if (!nombre || !matricula || !edad || !correo) {
    mostrarResultado('Completa todos los campos.', 'error');
    return;
  }

  const nuevoAlumno = {
    id: siguienteId++,
    nombre,
    matricula,
    edad,
    correo
  };

  alumnos.push(nuevoAlumno);
  render();
  formAlumno.reset();
  mostrarResultado(`Alumno "${nombre}" registrado.`, 'ok');
});

document.querySelector('#tabla-alumnos tbody').addEventListener('click', (e) => {
  const boton = e.target.closest('button[data-accion]');
  if (!boton) return;

  const fila = boton.closest('tr');
  const id = Number(fila.dataset.id);
  const accion = boton.dataset.accion;

  if (accion === 'eliminar') {
    eliminarAlumno(id);
  } else if (accion === 'editar') {
    editarAlumno(id);
  }
});

btnLimpiar.addEventListener('click', (e) => {
  e.preventDefault();
  formAlumno.reset();
  mostrarResultado('Formulario limpio.', 'ok');
});

btnPromedio.addEventListener('click', () => {
  const v1 = document.querySelector('#cal1').value;
  const v2 = document.querySelector('#cal2').value;
  const v3 = document.querySelector('#cal3').value;

  if (v1 === '' || v2 === '' || v3 === '') {
    mostrarResultado('Ingresa las 3 calificaciones antes de calcular.', 'error');
    return;
  }

  const c1 = Number(v1);
  const c2 = Number(v2);
  const c3 = Number(v3);

  if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
    mostrarResultado('Las calificaciones deben ser números válidos.', 'error');
    return;
  }

  const promedio = (c1 + c2 + c3) / 3;
  mostrarResultado(`Promedio: ${promedio.toFixed(2)}`, 'ok');
});

render();