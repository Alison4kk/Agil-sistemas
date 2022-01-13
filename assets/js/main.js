let imagens = document.getElementsByClassName('img-fluid img-zoomable')
console.log(imagens)
for (let i = 0; i < imagens.length; i++) {
  const element = imagens[i];

  //Funcao parra exibir notificacao e ocultar navbar
  element.addEventListener('click', exibirNotificacao, false)
}




function mostrarEnviando() {
  document.getElementById('div-enviando').classList.add('animate__animated', 'animate__zoomInLeft');
  document.getElementById('div-enviando').classList.remove('d-none');  
}

tippy('#botao-enviar', {
  content: 'Enviar contato',
  animation: 'scale',
});

let el_navbar = document.getElementById('container-navbar');
let notificacao_mostrada = false

function exibirNotificacao() {
  if (notificacao_mostrada == false) {
    $.notify("Mantenha pressionado para zoom", "info");
  }
  notificacao_mostrada = true
}

//Script do numero de telefone
document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
//Script do numero de telefone