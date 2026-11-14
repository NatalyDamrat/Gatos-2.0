# 🐾 Mundo dos Gatos — Desafio Felino

Projeto educativo desenvolvido com HTML, CSS e JavaScript, usando os conceitos estudados na unidade **Técnicas Computacionais: refletindo sobre Inteligência Artificial na escola**, da Alura Start.

## Como executar

Como o projeto utiliza módulos JavaScript (`import` e `export`), abra a pasta em um editor como o Visual Studio Code e execute com a extensão **Live Server**:

1. Extraia o arquivo ZIP.
2. Abra a pasta `mundo_dos_gatos` no VS Code.
3. Clique com o botão direito em `index.html`.
4. Escolha **Open with Live Server**.

Também é possível publicar a pasta no GitHub Pages.

## Estrutura dos arquivos

- `index.html` — estrutura e conteúdo da página.
- `style.css` — cores, fontes, espaçamento e adaptação para celular.
- `js/dados.js` — perguntas, alternativas, nomes e curiosidades (exportados).
- `js/missao.js` — funções de sorteio, embaralhamento, mensagens e condicionais (exportadas).
- `js/main.js` — controla as telas, os botões e a lógica do jogo (importa os módulos).

## Conceitos de programação utilizados

| Conceito | Onde aparece |
|---|---|
| Arrays | Listas de perguntas, alternativas, nomes e curiosidades em `dados.js` |
| `Math.random()` e `Math.floor()` | Sorteio de nomes, perguntas e curiosidades em `missao.js` |
| `export` e `import` | Compartilhamento de dados e funções entre os arquivos JavaScript |
| Condicionais (`if`, `else if`, `else`) | Verificação das respostas e mensagem de resultado |
| `for...of` | Percorre alternativas e organiza perguntas |
| `replace()` | Substitui `{nome}` por um nome sorteado |
| Eventos | `addEventListener()` reage aos cliques |
| Manipulação do HTML | `querySelector()`, `textContent`, `classList` e `createElement()` |

## Fluxograma simplificado

```text
        INÍCIO
           |
    Tela de apresentação
           |
      Clicar em começar
           |
    Sortear nome e perguntas
           |
      Exibir pergunta
           |
     Escolher alternativa
           |
       Está correta?
        /       \
      SIM       NÃO
       |         |
  Somar ponto  Mostrar explicação
        \       /
       Próxima pergunta
           |
    Ainda há perguntas?
       /       \
     SIM       NÃO
      |         |
  Nova questão  Resultado
      |         |
      +----< Jogar novamente
```

## Observação

O projeto é um jogo educativo. As informações sobre cuidados com gatos são gerais e não substituem a orientação de um médico-veterinário.
