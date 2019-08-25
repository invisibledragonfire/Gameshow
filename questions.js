const questions = [
    {
        prompt: "Was kann man anziehen?",
        answers: [
            {
                correct: false,
                text: "Norden", 
            },
            {
                correct: true,
                text: "Süden", 
            },
            {
                correct: false,
                text: "Osten", 
            },
            {
                correct: true,
                text: "Westen", 
            }
        ],
        points: 10
    },
    {
        prompt: "Zwei Dioptrien sind 50cm. Wieviel cm sind 4 Dioptrien?",
        answers: [
            {
                correct: false,
                text: "So viele Dioptrien gibt's gar nicht", 
            },
            {
                correct: false,
                text: "25", 
            },
            {
                correct: false,
                text: "100", 
            },
            {
                correct: false,
                text: "So viele Zentimeter gibt's gar nicht", 
            }
        ],
        points: 20
    }
];
let points = 0;
let currentQuestion = 0;
let selectedAnswer = null;
let confirmedAnswer = false;
let confirmedAnswerShown = false;

const promptDiv = document.getElementById("prompt");
const answerDiv = document.getElementById("answers");
const pointDiv = document.getElementById("points");

pointDiv.innerHTML = points;

const selectAnswer = function(selection) {
    if (confirmedAnswer) return;
    if (selectedAnswer === selection.srcElement) {
        answerDiv.setAttribute("data-selectionconfirmed", "true");
        selectedAnswer.setAttribute("data-selected", "true");
        const correct = selectedAnswer.getAttribute("data-correct");
        if (correct) {points += questions[currentQuestion].points};
        pointDiv.innerHTML = points;
        confirmedAnswer = true;
        return;
    }
    selectedAnswer = selection.srcElement;
    answerDiv.childNodes.forEach(div =>{
        div.setAttribute("data-notselected", "true");
    })
    selectedAnswer.removeAttribute("data-notselected")
}

const setQuestion = function(id) {
    const question = questions[id];
    promptDiv.innerHTML = question.prompt;
    answerDiv.innerHTML = "";
    answerDiv.removeAttribute("data-selectionconfirmed")
    question.answers.forEach(answer => {
        const newAnswer = document.createElement("div");
        newAnswer.innerHTML = answer.text;
        newAnswer.setAttribute("data-correct", answer.correct);
        newAnswer.addEventListener("click", selectAnswer);
        answerDiv.appendChild(newAnswer);
    })
    confirmedAnswer = false;
}
setQuestion(currentQuestion);

const nextQuestion = function() {
    if (!confirmedAnswer) return;
    if (!confirmedAnswerShown) {
        confirmedAnswerShown = true;
        return;
    }
    currentQuestion++;
    setQuestion(currentQuestion);
    selectedAnswer = null;
    confirmedAnswerShown = false;
}

document.addEventListener("click", nextQuestion);