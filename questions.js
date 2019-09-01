const questions = [
    {
        prompt: "Was sind Kleidungsstücke?",
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
        prompt: "Wer ist die Person auf dem Bild?",
        answers: [
            {
                correct: true,
                text: "Manfred"
            },
            {
                correct: true,
                text: "Koala"
            },
            {
                correct: true,
                text: "Opa"
            },
            {
                correct: true,
                text: "Prinz"
            }
        ],
        points: 10
    },
    // Secondary for second birthday
    /*{
        prompt: "Wer ist die Person auf dem Bild?",
        answers: [
            {
                correct: true,
                text: "Oma"
            },
            {
                correct: true,
                text: "Mutti"
            },
            {
                correct: true,
                text: "Brigitte"
            },
            {
                correct: true,
                text: "Frau Stenzel"
            }
        ],
        points: 10
    },*/
    {
        prompt: "Mit wie vielen Händen wird das Stück gespielt?",
        answers: [
            {
                correct: false,
                text: "Freihändig"
            },
            {
                correct: false,
                text: "Dreihändig"
            },
            {
                correct: true,
                text: "Zweihändig"
            },
            {
                correct: false,
                text: "Eihändig"
            }
        ],
        points: 10
    },
    {
        prompt: "Wer hat die KunstWerkstätten in Greifswald gegründet?",
        answers: [
            {
                correct: true,
                text: "Susanne Prinz"
            },
            {
                correct: false,
                text: "Ernst Moritz Arndt"
            },
            {
                correct: false,
                text: "Pommerscher Künstlerbund"
            },
            {
                correct: false,
                text: "MISSING OPTION"
            }
        ],
        points: 10
    },
    // Secondary for second birthday
    /*{
        prompt: "Welcher berühmte Baumeister hat das Haus in der Liebermannstr. 10 errichtet?",
        answers: [
            {
                correct: false,
                text: "Max Liebermann"
            },
            {
                correct: false,
                text: "Fürst Pückler"
            },
            {
                correct: true,
                text: "Richard Stenzel"
            },
            {
                correct: false,
                text: "Santa Klaus"
            }
        ],
        points: 10
    },*/
    {
        prompt: "Wer ist der Gastgeber?",
        answers: [
            {
                correct: false,
                text: "Der Hase"
            },
            {
                correct: true,
                text: "Der Igel"
            },
            {
                correct: false,
                text: "Der Löwe"
            },
            {
                correct: false,
                text: "OPTION NEEDS IMPROVEMENT"
            }
        ],
        points: 10
    },
    {
        prompt: "Welcher berühmte Künstler hat dieses Bild gemalt?",
        answers: [
            {
                correct: false,
                text: "Albrecht Dürer"
            },
            {
                correct: false,
                text: "Mozart"
            },
            {
                correct: true,
                text: "Manfred Prinz"
            },
            {
                correct: false,
                text: "Picasso"
            }
        ],
        points: 20
    },
    // Secondary for second birthday
    /*{
        prompt: "Was sollte die Oma mit Frieder machen?",
        answers: [
            {
                correct: false,
                text: "Mästen"
            },
            {
                correct: true,
                text: "Aufpassen"
            },
            {
                correct: false,
                text: "Beruhigen"
            },
            {
                correct: false,
                text: "Ignorieren"
            }
        ],
        points: 20
    },*/
    {
        prompt: "Wer hat dieses Video hergestellt?",
        answers: [
            {
                correct: true,
                text: "Filmwerk statt Prinz"
            },
            {
                correct: true,
                text: "Die Prinzen - true?"
            },
            {
                correct: false,
                text: "Filmstudio Babelsberg"
            },
            {
                correct: false,
                text: "HOLLYWOOD"
            }
        ],
        points: 20
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