const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "O mais novo piloto Kaio O'Conner acaba de completar 16 anos, e ganhar sua primeira corrida de drift como piloto junior. Para comemorar e incentivar seu filho, o mada escoler entre dois carro",
        alternativas: [
            {
                texto:"skyline r32",
                afirmacao: " Kaio escolheu o Skyline R32, conhecido como R32, é um carro esportivo produzido pela Nissan. Famoso pelo seu desempenho, com um motor RB26DETT, que gera cerca de 280 cavalos de potência e 260 lb-ft de torque."
            },
            {
                texto: "Nissan 370Z",
                afirmacao: " Kaio escolheu a Nissan 370Z, que vem equipado com um motor V6 de 3,7 litros (VQ37VHR), que produz cerca de 332 a 350 cv e esse motor é conhecido por sua potência robusta e resposta ágil."
            }
        ]
    },
    {
        enunciado: " Agora que Kaio já escolheu seu carro. ficou com uma duvida na cor do carro, se deveria colocar a cor branco que sempre sonhou ou o vermelho que seus amigos falaram",
        alternativas: [
            {
                texto:"Branco gelo",
                afirmacao: " Com essa a cor, kaio irá mostra a melhor parte de uma mistura do branco tradicional, com um tom mais frio e mais atraente sem contar que irá dar ao carro um visual moderno e refinado."
            },
            {
                texto: "Vermelho",
                afirmacao: " Kaio pintou seu carro de vermelho se destacando e mostrando o melhor de um tom vibrante e ousado, combinando um visual esportivo com um apelo dinâmico e atraente. Além disso, proporcionará ao carro uma aparência marcante e emocionante."
            }
        ]
    },
    {
        enunciado: " kaio tem que decidir entre  colocar uma roda adequada para competir ou se manter a originais ",
        alternativas: [
            {
                texto:"Deve trocar",
                afirmacao: " Com as rodas de competição terá um desempenho superior, ao melhorar a aderência e a resposta do carro em alta velocidade e em curvas, graças a materiais leves como alumínio ou magnésio. Esse menor peso reduz a massa não suspensa, aumentando a agilidade e a aceleração."
            },
            {
                texto: "Deve manter ",
                afirmacao: " Com as rodas originais oferecem um equilíbrio ideal entre desempenho e conforto, proporcionando uma condução suave que é perfeita para o uso diário. Elas são robustas e duráveis, com menor risco de danos mesmo em condições normais de estrada."
            }
        ]
    },
    {
        enunciado: " Kaio está querendo melhorar seu carro para participar da próxima corrida. Pensando nisso esta em duvida se deve colocar um kit ângulo",
        alternativas: [
            {
                texto:"Sim deve colocar",
                afirmacao: " Com o  Kit  ngulo irá colocar o carro de lado em um ângulo maior facilitando a manter a trajetória da curva."
            },
            {
                texto: "Não deve colocar",
                afirmacao: " se colocar um Kit ângulo para poder proporcionar mais angulação para seu carro de drift."
            }
        ]
    },
    {
        enunciado: "Como última melhoria nesse carro antes do campeonato que kaio irá participar. gostaria de trocar o radiador mais não sabe se deve colocar um maior  ou só trocar para um lugar com mais ventilação",
        alternativas: [
            {
                texto:"trocar de lugar",
                afirmacao: " Se trocamos o radiador de lugar teremos mais ventilação, então automaticamente ele não irá sobreaquecer fazendo o carro ferver "
            },
            {
                texto: "manter no local",
                afirmacao: " Deveria trocar o radiador pelo menos de lugar para não ocorrer o risco de sobreaquecer e vim estragar."
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',() => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();