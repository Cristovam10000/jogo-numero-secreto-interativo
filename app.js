


let listadenumerossorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
console.log(numeroSecreto)
let tentativas = 1;



function exibirtextonatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   

}

function exibirMensagemInicial(){
    exibirtextonatela('h1', 'jogo do numero secreto');
    exibirtextonatela('p', 'escolha um numero entre 1 e 10');

}

exibirMensagemInicial();




function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `vc descobriu com ${tentativas} ${palavratentativa}`;
        exibirtextonatela('h1' , 'acertou');
        exibirtextonatela('p', `${mensagemtentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    
    else{
        if(chute > numeroSecreto){
            exibirtextonatela('p' , 'o numero secreto é menor');
        } else{
            exibirtextonatela('p', 'o numero secreto e maior');
        } 
        tentativas++
        limparCampo();
    }
}

function gerarNumeroaleatorio() {
  let numeroEscolhido =  parseInt(Math.random()*numeroLimite + 1);
  let quantidadeDeElementosNaLista = listadenumerossorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listadenumerossorteados = [];

  }
  if (listadenumerossorteados.includes(numeroEscolhido)){
    return gerarNumeroaleatorio();
} else {
    listadenumerossorteados.push(numeroEscolhido);
    console.log(listadenumerossorteados);
    return numeroEscolhido;
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').removeAttribute('disabled', true);


}

