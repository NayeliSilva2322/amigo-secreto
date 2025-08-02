// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresDeAmigos = [];
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function agregarAmigo() {
  // selecciona el input
  let input = document.querySelector("#amigo");
  let nombre = input.value;
  // los nimbres tienen que la primera p0alabraa con mayuscula y el resto minuscula
  nombre = nombre
    .split(" ")
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" ");
  // si el nombre no esta vacio
  if (nombre.trim() === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  // si el nombre ya existe en la lista
  if (nombresDeAmigos.includes(nombre)) {
    alert("El nombre ya existe en la lista.");
    return;
  } else {
    // si el nombre es valido
    nombresDeAmigos.push(nombre);
    actualizarAmigos();
    input.value = ""; // limpia la celda
    input.focus();
    return;
  }
}

function actualizarAmigos() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar
  nombresDeAmigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombresDeAmigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * nombresDeAmigos.length);
  let amigoSeleccionado = nombresDeAmigos[indiceAleatorio];
  asignarTextoElemento(
    "#resultado",
    `Tu amigo secreto es: ${amigoSeleccionado}`
  );

  // Eliminar el amigo seleccionado de la lista
  nombresDeAmigos.splice(indiceAleatorio, 1);
  actualizarAmigos();
}

function limpiarResultado() {
  // Limpiar el resultado del sorteo
  asignarTextoElemento("#resultado", " ");
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista de amigos
  nombresDeAmigos = []; // Reiniciar la lista de amigos
}
function nuevoSorteo() {
  limpiarResultado(); // Solo reinicia todo
  alert("Se ha reiniciado el sorteo. Ingresa nuevos nombres para continuar.");
}
