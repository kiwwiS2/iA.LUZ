const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado :"Quais são um dos maiores motivos da desigualdade de gênero?",
        alternativas: [
            {
                texto: "A desigualdade de gẽnero pode acontecer por três motivos,estereótipo de gênero, assédio sexual nos ambientes acadêmicos e divisão do trabalho, incluindo a maternidade.",
                afirmação: "afirmação"
            },
            {
                texto:" Normalmente isso ocorre por assédios sexuais, esteriótipo de gênero e divisão de trabalho. A desigualdade pode ser subdividida em três partes, social, econômica e politíca, tendo como consequência um mundo desigual.",
                afirmação:"afirmação"
            }
        ]
    
    }, 
   
    {
        enunciado :  " Quais foram as medalhas do Brasil nas Olimpíadas Paris-2024?",
        alternativas: [
            {
                texto: "",
                afirmação: "afirmação"
            },
            {
                texto:"A castração de animais pode ser vista como uma intervenção desnecessária que interfere nos processos naturais de reprodução, desconsiderando que os ecossistemas têm capacidade de ajustar suas populações naturalmente.",
                afirmação:"afirmação"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
