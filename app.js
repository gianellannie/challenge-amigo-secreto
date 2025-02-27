let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const valueAmigo = inputAmigo.value.trim();
  if (valueAmigo === '') {
    alert('Por favor, inserte un nombre.');
  } else {
    amigos.push(valueAmigo);
    actualizarListaAmigos();
  }
  inputAmigo.value = '';
}

function actualizarListaAmigos() {
  const ulListaAmigos = document.getElementById('listaAmigos');
  ulListaAmigos.innerHTML = '';
  for (let index = 0; index < amigos.length; index++) {
    ulListaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
  }
}

function sortearAmigo() {
  if (!amigos.length) return;
  const ulResultado = document.getElementById('resultado');
  const indexAleatorio = Math.floor(Math.random() * amigos.length);
  const amigo = amigos[indexAleatorio];
  ulResultado.innerHTML = `<li>${amigo}</li>`;
}
