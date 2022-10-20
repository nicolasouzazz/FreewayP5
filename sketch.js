function setup() {
  createCanvas(500, 400);
  somFundo.loop();
}

function draw() {
  background(imagemEstrada);
  exibirAtor();
  exibirCarro();
  movimentarCarro();
  movimentarAtor();
  voltarCarroPosicaoInicial();
  verificarColisao();
  exibirPontos();
  marcarPonto();
}
