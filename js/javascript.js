var ativarFace = document.querySelector('.descricaoFace');
var ativarInsta = document.querySelector('.descricaoInsta');
var ativarYout = document.querySelector('.descricaoYout');
var ativarWhats = document.querySelector('.descricaoWhats');

// SECT FACE

function AddActiveFace() {
  ativarFace.classList.add('active');
  ativarWhats.classList.remove('active')
  ativarInsta.classList.remove('active')
  ativarYout.classList.remove('active')

}

// function RemoveActiveFace() {
// ativarFace.classList.remove('active')
// }

// /SECT FACE

// SECT WHATS

function AddActiveWhats() {
  ativarWhats.classList.add('active');
  ativarFace.classList.remove('active')
  ativarInsta.classList.remove('active')
  ativarYout.classList.remove('active')
}

// function RemoveActiveWhats() {
// ativarWhats.classList.remove('active')
// }

// /SECT WHATS

// SECT INSTA

function AddActiveInsta() {
  ativarInsta.classList.add('active');
  ativarWhats.classList.remove('active')
  ativarFace.classList.remove('active')
  ativarYout.classList.remove('active')
}

// function RemoveActiveInsta() {
// ativarInsta.classList.remove('active');
// }

// /SECT INSTA


function AddActiveYout() {
  ativarYout.classList.add('active');
  ativarWhats.classList.remove('active')
  ativarInsta.classList.remove('active')
  ativarFace.classList.remove('active')
}

// function RemoveActiveYout() {
// ativarYout.classList.remove('active');
// }