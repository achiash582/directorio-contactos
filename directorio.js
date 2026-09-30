// ===== Datos =====
// Arreglo de objetos: { id, nombre, telefono }
let contactos = [];
let siguienteId = 1;

// ===== Elementos del DOM =====
const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btn-agregar");
const inputBuscador = document.getElementById("buscador");
const lista = document.getElementById("lista-contactos");
const mensajeVacio = document.getElementById("mensaje-vacio");
const contador = document.getElementById("contador");

// ===== Renderizado =====
// Dibuja la lista según el texto del buscador.
// El contador SIEMPRE usa contactos.length (total real).
function render() {
  const texto = inputBuscador.value.trim().toLowerCase();

  const filtrados = contactos.filter(function (c) {
    return c.nombre.toLowerCase().includes(texto);
  });

  lista.innerHTML = "";

  filtrados.forEach(function (c) {
    const li = document.createElement("li");
    li.className = "contacto";

    const info = document.createElement("div");
    info.className = "contacto-info";

    const nombre = document.createElement("span");
    nombre.className = "contacto-nombre";
    nombre.textContent = c.nombre;

    const telefono = document.createElement("span");
    telefono.className = "contacto-telefono";
    telefono.textContent = c.telefono;

    info.appendChild(nombre);
    info.appendChild(telefono);

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.type = "button";
    btnEliminar.textContent = "Eliminar";

    // Un event listener por cada botón de eliminar
    btnEliminar.addEventListener("click", function () {
      eliminarContacto(c.id);
    });

    li.appendChild(info);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  // Mensaje cuando no hay nada que mostrar
  if (contactos.length === 0) {
    mensajeVacio.textContent = "Todavía no agregaste contactos.";
    mensajeVacio.classList.remove("oculto");
  } else if (filtrados.length === 0) {
    mensajeVacio.textContent = "No hay contactos que coincidan con la búsqueda.";
    mensajeVacio.classList.remove("oculto");
  } else {
    mensajeVacio.classList.add("oculto");
  }

  // Contador: total real, no depende del filtro
  contador.textContent = "Contactos: " + contactos.length;
}

// ===== Agregar =====
function agregarContacto() {
  const nombre = inputNombre.value.trim();
  const telefono = inputTelefono.value.trim();

  // No permitir contactos vacíos
  if (nombre === "" || telefono === "") {
    return;
  }

  contactos.push({ id: siguienteId++, nombre: nombre, telefono: telefono });

  inputNombre.value = "";
  inputTelefono.value = "";
  inputNombre.focus();

  render();
}

// ===== Eliminar =====
function eliminarContacto(id) {
  contactos = contactos.filter(function (c) {
    return c.id !== id;
  });
  render();
}

// ===== Event listeners =====
btnAgregar.addEventListener("click", agregarContacto);
inputBuscador.addEventListener("input", render);

// Primer render
render();