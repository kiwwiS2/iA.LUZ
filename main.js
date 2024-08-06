cconst caixaPrincipal = document.querySelector(".caixa-principal");
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
                texto:" Normalmente isso ocorrer por assédios sexuais, esteriótipo de gênero e divisão de trabalho. A desigualdade pode ser subdividida em três partes, social, econômica e politíca, tendo como consequência um mundo desigual.",
                afirmação:"afirmação"
            }
        ]
    },
    
    {
        enunciado : "Por que na ?",
        alternativas: [
            {
                texto: "A prática da castração de animais deve ser vista como uma medida necessária para controlar a superpopulação e promover a saúde dos animais, alinhando-se com a ideia de que menos animais significa mais qualidade de vida para cada um deles.",
                afirmação: "afirmação"
            },
            {
                texto:"A castração de animais pode ser vista como uma intervenção desnecessária que interfere nos processos naturais de reprodução, desconsiderando que os ecossistemas têm capacidade de ajustar suas populações naturalmente.",
                afirmação:"afirmação"
            }
        ]
    }, 
   
    {
        enunciado :  "Na sua opinião, considerando a cultura contemporânea do 'fazer menos é fazer mais', a prática da castração de animais deve ser vista como: uma medida necessária para controlar a superpopulação e promover a saúde dos animais; ou como uma intervenção desnecessária que pode interferir nos processos naturais de reprodução?",
        alternativas: [
            {
                texto: "A prática da castração de animais deve ser vista como uma medida necessária para controlar a superpopulação e promover a saúde dos animais, alinhando-se com a ideia de que menos animais significa mais qualidade de vida para cada um deles.",
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

function mostraPergunta(atual);
     if (atual >= ṕerguntas[length]) {
        mostraResultado ();
        return;
     }
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
     mostraAlternativas();
     
    function mostraAlternativas(){
     for(const alternativas of perguntaAtual.alternativas){
     const botaoAlternativas = document.createElement("button")
     botaoAlternativas.textContent = alternativas.texto;
     botaoAlternativas.addEventListener("click", () => respostaSelecionada (alternativa));
     }

    }

    function respostaSelecionada(opcaoselecionada){
     const afirmacoes = opcaoselecionada.afirmacao;
     historiaFinal += afirmacoes + "";
     atual++;
     mostraPergunta();

    }

    function mostraResultado(){

    }
