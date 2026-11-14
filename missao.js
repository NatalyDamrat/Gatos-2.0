// Funções principais da missão. Elas são exportadas para serem usadas em main.js.

export function sortearIndice(tamanho) {
  return Math.floor(Math.random() * tamanho);
}

export function embaralharPerguntas(lista) {
  const copia = [...lista];
  // O for...of percorre a lista e cria uma nova ordem de perguntas.
  const embaralhadas = [];
  for (const pergunta of copia) {
    const posicao = sortearIndice(embaralhadas.length + 1);
    embaralhadas.splice(posicao, 0, pergunta);
  }
  return embaralhadas;
}

export function criarMensagem(nome, texto) {
  // replace substitui o marcador {nome} pelo nome sorteado.
  return texto.replace("{nome}", nome);
}

export function mensagemDeResultado(pontos, total) {
  // Condicional para escolher uma mensagem de acordo com a pontuação.
  if (pontos === total) {
    return "Incrível! Você acertou tudo. Um verdadeiro especialista em gatos!";
  } else if (pontos >= 3) {
    return "Muito bem! Você já sabe bastante sobre o universo felino.";
  } else {
    return "Toda jornada começa com aprendizado. Tente novamente e descubra mais!";
  }
}
