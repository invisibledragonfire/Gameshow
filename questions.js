const questions = [
    {content:"start"},
    {content:"prizes"},
    {
        prompt: "Was sind Kleidungsstücke?",
        answers: [
            {
                correct: false,
                text: "Norden", 
            },
            {
                correct: false,
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
    },// ei, frei, drei, vier
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
                text: "Caspar David Friedrich"
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
        prompt: "Der Hase im Rausch - Wer ist der Gastgeber?",
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
                text: "Manfred"
            }
        ],
        points: 10
    },
    /*{
        prompt: "Der Hase im Rausch - Wer ist der Gastgeber?",
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
                text: "Mutti"
            }
        ],
        points: 10
    },*/
    {content:"adbreak"},
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
                text: "Die Prinzen"
            },
            {
                correct: false,
                text: "Filmstudio Babelsberg"
            },
            {
                correct: false,
                text: "Hollywood"
            }
        ],
        points: 20
    },
    {
        prompt: "Wie weit ist es von Greifswald nach Grimstad (Norwegen)?",
        answers: [
            {
                correct: true,
                text: "Zehn Stunden"
            },
            {
                correct: false,
                text: "Zehn Meilen"
            },
            {
                correct: false,
                text: "Zehn Liter"
            },
            {
                correct: true,
                text: "Zu weit"
            }
        ],
        points: 20
    },
    /*{
        prompt: "Wie weit ist es von Cottbus nach Grimstad (Norwegen)?",
        answers: [
            {
                correct: true,
                text: "Zehn Stunden"
            },
            {
                correct: false,
                text: "Zehn Meilen"
            },
            {
                correct: false,
                text: "Zehn Liter"
            },
            {
                correct: true,
                text: "Zu weit"
            }
        ],
        points: 20
    },*/
    {
        prompt: "Welcher Tanz ist das?",
        // Samba, Rumba, Tango, Walzer
        answers: [
            {
                correct: false,
                text: "Nutella"
            },
            {
                correct: false,
                text: "Nudossi"
            },
            {
                correct: false,
                text: "Nugatti"
            },
            {
                correct: true,
                text: "Samba"
            }
        ],
        points: 20
    },
    {
        prompt: "Welche dieser Farben ist Blau?",
        colorful: true,
        answers: [
            {
                correct: false,
                text: "Rot"
            },
            {
                correct: false,
                text: "Grün"
            },
            {
                correct: false,
                text: "Blau"
            },
            {
                correct: false,
                text: "Gelb"
            }
        ],
        points: 20
    },
    {content:"adbreak"},
    {
        prompt: "Zwei Dioptrien sind 50cm. Wieviel cm sind 4 Dioptrien?",
        answers: [
            {
                correct: false,
                text: "So viele Dioptrien gibt's gar nicht",
            },
            {
                correct: true,
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
        points: 50
    },
    {
        prompt: "Wie viele Fragen haben sie heute schon in dieser Show beantwortet? (add true)",
        answers: [
            {
                correct: true,
                text: "13"
            },
            {
                correct: false,
                text: "15"
            },
            {
                correct: false,
                text: "20"
            },
            {
                correct: true,
                text: "Zu viele"
            }
        ],
        points: 50
    },
    {
        prompt: "Wer ist das?",
        answers: [
            {
                correct: true,
                text: "Felix"
            },
            {
                correct: false,
                text: "Flora"
            },
            {
                correct: false,
                text: "Frieder"
            },
            {
                correct: false,
                text: "Lisanne"
            }
        ],
        points: 50
    },
    {
        prompt: "Was misst man in Teelöffeln pro Lichtjahr?",
        answers: [
            {
                correct: false,
                text: "Länge"
            },
            {
                correct: false,
                text: "Zeit"
            },
            {
                correct: false,
                text: "Geschwindigkeit"
            },
            {
                correct: true,
                text: "Fläche"
            }
        ],
        points: 50
    },
    {
        prompt: "Was ist ein Bonus?",
        answers: [
            {
                correct: true,
                text: "Eine isländische Supermarktkette"
            },
            {
                correct: true,
                text: "Ein experimenteller Reaktortyp"
            },
            {
                correct: true,
                text: "Ein Ort in Texas (USA) im Wharton County"
            },
            {
                correct: true,
                text: "Ein Asteroid mit der Nummer 10028"
            }
        ],
        points: 50
    },
    {content:"prizes"}
];
let points = 0;
let currentContent = 0;
let selectedAnswer = null;
let confirmedAnswer = false;
let confirmedAnswerShown = false;

let currentContentDiv = document.getElementById("start");
let contentIsQuestion = false;

const promptDiv = document.getElementById("prompt");
const answerDiv = document.getElementById("answers");
const pointDiv = document.getElementById("points");
const newPointsDiv = document.getElementById("newPoints");

pointDiv.innerHTML = points;

const selectAnswer = function(selection) {
    if (confirmedAnswer) return;
    if (selectedAnswer === selection.srcElement) {
        answerDiv.setAttribute("data-selectionconfirmed", "true");
        selectedAnswer.setAttribute("data-selected", "true");
        const correct = selectedAnswer.getAttribute("data-correct");
        if (correct == "true") {points += questions[currentContent].points};
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

const changeContent = function (contentName) {
    let content = document.getElementById(contentName); 
    content.classList.remove("hide");
    currentContentDiv.classList.add("hide");
    currentContentDiv = content;
} 

const setContent = function (id) {
    const question = questions[id];
    if (!question.content) {
        if (!contentIsQuestion) {
            changeContent("questions");
            contentIsQuestion = true;
        }
        setQuestion(question);
    } else {
        changeContent(question.content);
        contentIsQuestion = false;
    }
}

const setQuestion = function(question) {
    promptDiv.innerHTML = question.prompt;
    newPointsDiv.innerHTML = question.points;
    answerDiv.innerHTML = "";
    answerDiv.removeAttribute("data-selectionconfirmed")
    question.answers.forEach(answer => {
        const newAnswer = document.createElement("div");
        newAnswer.innerHTML = answer.text;
        question.colorful && newAnswer.classList.add("colorful");
        newAnswer.setAttribute("data-correct", answer.correct);
        newAnswer.addEventListener("click", selectAnswer);
        answerDiv.appendChild(newAnswer);
    })
    confirmedAnswer = false;
}
//setQuestion(currentContent);

const nextQuestion = function() {
    if (!confirmedAnswer) return;
    if (!confirmedAnswerShown) {
        confirmedAnswerShown = true;
        return;
    }
    currentContent++;
    setContent(currentContent);
    selectedAnswer = null;
    confirmedAnswerShown = false;
}

const nextContent = function() {
    if (contentIsQuestion) return nextQuestion();
    currentContent++;
    setContent(currentContent);
}

document.addEventListener("click", nextContent);