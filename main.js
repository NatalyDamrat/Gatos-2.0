// Importa os dados e as funções que estão em outros arquivos.
import { nomesGatos, perguntas, curiosidades } from "./dados.js";
import { sortearIndice, embaralharPerguntas, criarMensagem, mensagemDeResultado } from "./missao.js";

const telaInicial = document.querySelector("#tela-inicial");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");
const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoProxima = document.querySelector("#botao-proxima");
const botaoReiniciar = document.querySelector("#botao-reiniciar");
const perguntaElemento = document.querySelector("#pergunta");
const alternativasElemento = document.querySelector("#alternativas");
const feedbackElemento = document.querySelector("#feedback");
const numeroPergunta = document.querySelector("#numero-pergunta");
const pontuacaoElemento = document.querySelector("#pontuacao");
const progressoElemento = document.querySelector("#progresso");
const nomeMissao = document.querySelector("#nome-missao");

let perguntasDaRodada = [];
let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;
let nomeDoGato = "";

function mostrarTela(tela) {
  // Esconde as três telas e mostra somente a tela escolhida.
  telaInicial.classList.add("escondida");
  telaJogo.classList.add("escondida");
  telaFinal.classList.add("escondida");
  tela.classList.remove("escondida");
}

function iniciarJogo() {
  perguntaAtual = 0;
  pontuacao = 0;
  respondeu = false;
  nomeDoGato = nomesGatos[sortearIndice(nomesGatos.length)];
  perguntasDaRodada = embaralharPerguntas(perguntas).slice(0, 5);
  mostrarTela(telaJogo);
  mostrarPergunta();
}

function mostrarPergunta() {
  respondeu = false;
  const dados = perguntasDaRodada[perguntaAtual];
  numeroPergunta.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntasDaRodada.length}`;
  pontuacaoElemento.textContent = `⭐ ${pontuacao} ${pontuacao === 1 ? "ponto" : "pontos"}`;
  progressoElemento.style.width = `${(perguntaAtual / perguntasDaRodada.length) * 100}%`;
  nomeMissao.textContent = `MISSÃO DE ${nomeDoGato.toUpperCase()}`;
  perguntaElemento.textContent = criarMensagem(nomeDoGato, dados.pergunta);
  feedbackElemento.textContent = "";
  feedbackElemento.classList.remove("erro");
  botaoProxima.classList.add("escondida");
  alternativasElemento.innerHTML = "";

  // O for...of cria um botão para cada alternativa da pergunta.
  for (const [indice, alternativa] of dados.alternativas.entries()) {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = alternativa;
    botao.addEventListener("click", () => verificarResposta(indice));
    alternativasElemento.appendChild(botao);
  }
}

function verificarResposta(indiceEscolhido) {
  if (respondeu) return;
  respondeu = true;

  const dados = perguntasDaRodada[perguntaAtual];
  const botoes = alternativasElemento.querySelectorAll(".opcao");

  // Condicional: verifica se a alternativa escolhida está correta.
  if (indiceEscolhido === dados.correta) {
    pontuacao++;
    feedbackElemento.textContent = `Acertou! ${dados.explicacao}`;
  } else {
    feedbackElemento.textContent = `Quase! ${dados.explicacao}`;
    feedbackElemento.classList.add("erro");
  }

  botoes.forEach((botao, indice) => {
    botao.disabled = true;
    if (indice === dados.correta) botao.classList.add("correta");
    else if (indice === indiceEscolhido) botao.classList.add("errada");
  });

  pontuacaoElemento.textContent = `⭐ ${pontuacao} ${pontuacao === 1 ? "ponto" : "pontos"}`;
  botaoProxima.classList.remove("escondida");
  botaoProxima.textContent = perguntaAtual === perguntasDaRodada.length - 1 ? "Ver resultado →" : "Próxima pergunta →";
}

function avancarPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntasDaRodada.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  mostrarTela(telaFinal);
  progressoElemento.style.width = "100%";
  document.querySelector("#resultado-pontos").textContent = `${pontuacao}/5`;
  document.querySelector("#titulo-final").textContent = mensagemDeResultado(pontuacao, perguntasDaRodada.length);
  document.querySelector("#mensagem-final").textContent = criarMensagem(nomeDoGato, "Parabéns, {nome}! Você terminou a missão felina.");
  document.querySelector("#emoji-final").textContent = pontuacao >= 4 ? "🏆" : pontuacao >= 2 ? "🐾" : "💛";
  const curiosidade = curiosidades[sortearIndice(curiosidades.length)];
  document.querySelector("#curiosidade-final").textContent = `💡 Curiosidade: ${curiosidade}`;
}

// Eventos dos botões: iniciar, continuar e jogar novamente.
botaoIniciar.addEventListener("click", iniciarJogo);
botaoProxima.addEventListener("click", avancarPergunta);
botaoReiniciar.addEventListener("click", iniciarJogo);
