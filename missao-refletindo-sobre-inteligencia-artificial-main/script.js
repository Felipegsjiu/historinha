const perguntas = [
    {
        enunciado: "Jorge é um garoto anão que sofre bullying todos os dias na escola de Jerry, um garoto que usa cadeira de rodas. Um dia, Jorge vê Jerry caindo da rampa da escola e gritando por ajuda. O que Jorge deve fazer?",
        alternativas: [
            {
                texto: "Ajudar Jerry imediatamente, mesmo com tudo o que ele fez.",
                afirmacao: "Jorge corre e ajuda Jerry a se levantar, mostrando que apesar do bullying, ele tem empatia."
            },
            {
                texto: "Ignorar e ir embora, acreditando que Jerry merece aprender uma lição.",
                afirmacao: "Jorge se afasta, mas no fundo sente que poderia ter feito diferente."
            }
        ]
    },
    {
        enunciado: "Dias depois, Jerry pede desculpas para Jorge e tenta iniciar uma amizade. O que Jorge faz?",
        alternativas: [
            {
                texto: "Aceita a amizade e tenta começar de novo.",
                afirmacao: "Jorge e Jerry começam a se conhecer melhor e percebem que ambos enfrentam dificuldades únicas."
            },
            {
                texto: "Recusa e diz que não pode confiar nele ainda.",
                afirmacao: "Jorge mantém distância, mas continua refletindo sobre o pedido de desculpas."
            }
        ]
    },
    {
        enunciado: "Na formatura, Jorge e Jerry são chamados para receber um prêmio de superação juntos. O que Jorge faz no palco?",
        alternativas: [
            {
                texto: "Segura a mão de Jerry e mostra que os dois superaram tudo juntos.",
                afirmacao: "O público se emociona ao ver dois garotos que antes se odiavam celebrarem juntos."
            },
            {
                texto: "Pega o prêmio sozinho e ignora Jerry.",
                afirmacao: "Jorge leva o prêmio, mas a falta de reconciliação deixa o momento amargo."
            }
        ]
    }
];

let indice = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (indice >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[indice];
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa.afirmacao));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(afirmacao) {
    historiaFinal += afirmacao + " ";
    indice++;
    mostraPergunta();
}

function mostraResultado() {
    document.querySelector(".caixa-perguntas").textContent = "Fim da história!";
    document.querySelector(".caixa-alternativas").textContent = "";
    document.querySelector(".texto-resultado").textContent = historiaFinal;
}

mostraPergunta();
