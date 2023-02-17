const questions = [
    {
        title: "Qual esporte não utiliza bola ?",
        answers: ["Basquete", "Futebol", "Vôlei", "Golf", "Corrida"],
        correctAnswer: 4
    },
    {
        title: "Qual o jogador com mais gols no futebol ?",
        answers: ["Pelé", "Messi", "Cristiano Ronaldo", "Neymar", "Maradona"],
        correctAnswer: 0
    }, 
    {
        title: "Quantos tempo dura uma partida inteira de futebol ?",
        answers: ["90 min", "45 min", "180 min", "30 min", "15 min"],
        correctAnswer: 0
    }, 
    {
        title: "Qual o nome do movimento que dá início a uma partida de Vôlei ?",
        answers: ["Começar", "Manchete", "Levantamento", "Saque", "Corte"],
        correctAnswer: 3
    }, 
    {
        title: "Quantos jogadores tem numa partida de futebol ?",
        answers: ["16 jogadores", "10 jogadores", "11 jogadores", "22 jogadores", "20 jogadores"],
        correctAnswer: 3
    },        
]

const questionNumber = document.querySelector(".question-number");
const questionTitle = document.querySelector(".question-title")
const answers = document.querySelectorAll(".answer");

let initialPosition = 0;
let score = 0;

const displayQuestion = ()=>{
    questionNumber.textContent = `Questão ${initialPosition+1}`;
    questionTitle.textContent = questions[initialPosition].title;
    
    answers.forEach((answer,index)=>{
        answer.textContent = questions[initialPosition].answers[index]
        answer.addEventListener("click",nextQuestion)
        answer.setAttribute("data-correct", questions[index].correctAnswer)
    })
}

const nextQuestion = ()=>{
   if(initialPosition === questions.length -1){
    return false;
   }
   else{
    initialPosition += 1;
    displayQuestion();
   }
}

const init = ()=>{
    displayQuestion();
}

init();



