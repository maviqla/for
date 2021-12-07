//Configurando carrinho do Pedro
const velMaximaPedro = 230;
const velMinimaPedro = 150;
const txDerrapagemPedro = 0.03;

//Configurando carrinho do Juca
const velMaximaJuca = 260;
const velMinimaJuca = 120;
const txDerrapagemJuca = 0.05;


//Configurando carrinho da Edna//
const velMaximaEdna = 220;
const velMinimaEdna = 180;
const txDerrapagemEdna = 0.01;

//Criando contadores de vitoria//
let numeroVitoriasPedro = 0;
let numeroVitoriasJuca = 0;
let numeroVitoriasEdna = 0;


//Função que busca a velocidade de um carrinho//
function getVelocity(min, max) {
  return Math.random() * (max - min) + min;
}

//Função com valor de voltas adicionável//
function executaCorrida() {

  let numberVoltas = document.getElementById('voltas').value

  let voltaPedro = +0
  let voltaJuca = +0
  let voltaEdna = +0

//Variáveis para contadores de vítoria//
  let racePedro = +0
  let raceJuca = +0
  let raceEdna = +0

//Executa calculo de velocidade dos Pilotos//
  for (let i = 0; i < numberVoltas; i++) {
    let velocidadePedro = getVelocity(velMinimaPedro, velMaximaPedro);
    velocidadePedro = velocidadePedro - (velocidadePedro * txDerrapagemPedro);
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadePedro) + " Piloto - Pedro");

    let velocidadeJuca = getVelocity(velMinimaJuca, velMaximaJuca);
    velocidadeJuca = velocidadeJuca - (velocidadeJuca * txDerrapagemJuca);

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeJuca) + ' Piloto - Juca');

    let velocidadeEdna = getVelocity(velMinimaEdna, velMaximaEdna);
    velocidadeEdna = velocidadeEdna - (velocidadeEdna * txDerrapagemEdna);

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeEdna) + ' Piloto - Edna');

//Número de voltas que cada um ganhou//
    if (velocidadePedro > velocidadeJuca && velocidadePedro > velocidadeEdna) {
      voltaPedro++

    } else if (velocidadeJuca > velocidadePedro && velocidadeJuca > velocidadeEdna) {
      voltaJuca++

    } else if (velocidadeEdna > velocidadeJuca && velocidadeEdna > velocidadePedro) {
      voltaEdna++

    }
    console.log('Pedro venceu ' + voltaPedro + ' volta(s)')
    console.log('Juca venceu ' + voltaJuca + ' volta(s)')
    console.log('Edna venceu ' + voltaEdna + ' volta(s)')


   //Contador de Vítorias/Empates//
   if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
    document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
    document.getElementById('resultado').innerHTML = 'O Pedro venceu a corrida'
  } else if (voltaPedro == voltaJuca && voltaPedro > voltaEdna) {
    document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
    document.getElementById('resultado').innerHTML = 'Pedro e Juca empataram'
  } else if (voltaPedro == voltaEdna && voltaPedro > voltaJuca) {
    document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
    document.getElementById('resultado').innerHTML = 'Pedro e Edna empataram'
  } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
    document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
    document.getElementById('resultado').innerHTML = 'O Juca venceu a corrida'
  } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
    document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
    document.getElementById('resultado').innerHTML = 'a Edna venceu a corrida'
  }

}
}

//Função para botões//
function executaCorridaButton(numeroVoltas) {

  let numberVoltas = document.getElementById('voltas').value

  let voltaPedro = +0
  let voltaJuca = +0
  let voltaEdna = +0

//Variáveis para contadores de vítoria//
  let racePedro = +0
  let raceJuca = +0
  let raceEdna = +0

  //Executa calculo de velocidade dos Pilotos//
  for (let i = 0; i < numeroVoltas; i++) {
    let velocidadePedro = getVelocity(velMinimaPedro, velMaximaPedro);
    velocidadePedro = velocidadePedro - (velocidadePedro * txDerrapagemPedro);
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadePedro) + " Piloto - Pedro");

    let velocidadeJuca = getVelocity(velMinimaJuca, velMaximaJuca);
    velocidadeJuca = velocidadeJuca - (velocidadeJuca * txDerrapagemJuca);

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeJuca) + ' Piloto - Juca');

    let velocidadeEdna = getVelocity(velMinimaEdna, velMaximaEdna);
    velocidadeEdna = velocidadeEdna - (velocidadeEdna * txDerrapagemEdna);

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeEdna) + ' Piloto - Edna');


    //Número de voltas que cada um ganhou//
    if (velocidadePedro > velocidadeJuca && velocidadePedro > velocidadeEdna) {
      voltaPedro++

    } else if (velocidadeJuca > velocidadePedro && velocidadeJuca > velocidadeEdna) {
      voltaJuca++

    } else if (velocidadeEdna > velocidadeJuca && velocidadeEdna > velocidadePedro) {
      voltaEdna++

    }
    console.log('Pedro venceu ' + voltaPedro + ' volta(s)')
    console.log('Juca venceu ' + voltaJuca + ' volta(s)')
    console.log('Edna venceu ' + voltaEdna + ' volta(s)')


    //Contador de Vítorias/Empates//
    if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Pedro venceu a corrida'
    } else if (voltaPedro == voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Juca empataram'
    } else if (voltaPedro == voltaEdna && voltaPedro > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Edna empataram'
    } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Juca venceu a corrida'
    } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'a Edna venceu a corrida'
    }

  }
}
