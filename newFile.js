 function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Feliz dia dos namorados!');
    exibirTextoNaTela ('p', 'Um site especial para o seu amor!');
}




function botaoClicado() {
  document.getElementById("meuBotao").textContent = "Surpresa! Eu te amo!";
  }



