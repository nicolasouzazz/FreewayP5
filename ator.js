//variaveis ator
let xAtor = 90;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let diametroAtor = 15;
let colisao = false;
let meusPontos = 0;

function exibirAtor() {
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentarAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (limitarMovimentoAtor()) {
      yAtor += 3;
    }
  }
}

//limitar o ator de passar das bordas,se podemos movimentar o ator
function limitarMovimentoAtor() {
  return yAtor < 366;
}

function verificarColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      diametroAtor
    );

    if (colisao) {
      colisaoAtor();
      somColisao.play();
      if (pontosMaior()) {
        meusPontos -= 1;
      }
    }
  }
}

//ator volta para posicao inicial
function colisaoAtor() {
  yAtor = 366;
}

function exibirPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width / 5, 27);
}

function marcarPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somPonto.play();
    colisaoAtor();
  }
}

//verifica se o ponto é maior que zero, logo tira 1 ponto
function pontosMaior() {
  return meusPontos > 0;
}
