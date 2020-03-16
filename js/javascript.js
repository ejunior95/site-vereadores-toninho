var ativarFace = document.querySelector('.descricaoFace');
var ativarInsta = document.querySelector('.descricaoInsta');
var ativarYout = document.querySelector('.descricaoYout');
var ativarWhats = document.querySelector('.descricaoWhats');
var verificador_navbarToggle = false
var navbarToggle = document.querySelector('.menu_navReduzida');

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

// INSTAFEED

$( document ).ready(function(){

var userFeed = new Instafeed({
  get: 'user',
  userId: '4592529144',
  limit: 10,
  resolution: 'standard_resolution',
  accessToken: '',
  sortBy: 'most-recent',
  template: '<div class="container_GaleriaFotos"><a href="{{image}}" title="{{caption}}" target="_blank"><div class="box"><img src="{{image}}" alt="{{caption}}"/></div></a></div>',
});
userFeed.run();


});

// INSTAFEED

// TOGGLE DA NAVBAR

function abrirNavBar(){
  if (verificador_navbarToggle === false){
    navbarToggle.classList.add('active');
    verificador_navbarToggle = true;
  }
  else{
    navbarToggle.classList.remove('active');
    verificador_navbarToggle = false;
  }
  
}


// TOGGLE DA NAVBAR
