const questions = [
    {content:"start"},
    {content:"info"},
    {
        image: "wetterhahn.jpg",
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
        image: "kopa.jpg",
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
        image: "mutti.jpg",
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
        image: "Main Video.mp4",
        prompt: "Mit wie vielen Händen wird das Stück gespielt?",
        answers: [
            {
                correct: false,
                text: "Freihändig"
            },
            {
                correct: false,
                text: "Zweihändig"
            },
            {
                correct: false,
                text: "Dreihändig"
            },
            {
                correct: true,
                text: "Vierhändig"
            }
        ],
        points: 10
    },// ei, frei, drei, vier
    {
        image: "kunstwerkstatt.jpg",
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
        image: "muttishaus.jpg",
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
        image: "rauschhase.jpg",
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
        image: "rauschhase.jpg",
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
        image: "maerchen.jpg",
        prompt: "Was sagt Aschenputtel?",
        answers: [
            {
                correct: false,
                text: "Ich bin so schön."
            },
            {
                correct: true,
                text: "OK."
            },
            {
                correct: false,
                text: "Ich bin die gute Fee."
            },
            {
                correct: false,
                text: "Ich bin das Aschenbrödel."
            }
        ],
        points: "Schokolade",
        dontAddPoints: true
    },
    {
        image: "opasbild.jpg",
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
        image: "fetterfrieder.jpg",
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
        image: "regenlied.mp4",
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
        image: "abstand.jpg",
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
        image: "tanzvideo.mp4",
        prompt: "Welcher Tanz ist das?",
        // Samba, Rumba, Tango, Walzer
        answers: [
            {
                correct: false,
                text: "Salsa"
            },
            {
                correct: true,
                text: "Chacha(cha)"
            },
            {
                correct: false,
                text: "Walza"
            },
            {
                correct: false,
                text: "Samba"
            }
        ],
        points: 20
    },
    {
        image: "blau.jpg",
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
        image: "brille.jpg",
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
        image: "fragen.jpg",
        prompt: "Wie viele Quizfragen haben sie heute schon in dieser Show beantwortet?",
        answers: [
            {
                correct: false,
                text: "10"
            },
            {
                correct: true,
                text: "12"
            },
            {
                correct: false,
                text: "14"
            },
            {
                correct: true,
                text: "Zu viele"
            }
        ],
        points: 50
    },
    {
        image: "baby.jpg",
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
        image: "lichtjahr.jpg",
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
        image: "bonus.jpg",
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
        ]
    },
    {content:"prizes"},
    {content:"victory"}
];
let points = 0;
const totalPoints = 500;
let currentContent = 0;
let selectedAnswer = null;
let confirmedAnswer = false;

let currentContentDiv = document.getElementById("start");
let contentIsQuestion = false;

const jingle = document.getElementById("jingle");

const promptDiv = document.getElementById("prompt");
const answerDiv = document.getElementById("answers");
const pointDiv = document.getElementById("points");
const newPointsDiv = document.getElementById("newPoints");
const imgDiv = document.getElementById("img");
const jokerDiv = document.getElementById("jokers");
const jokers = jokerDiv.children;

pointDiv.innerHTML = points;

const selectAnswer = function(selection) {
    if (confirmedAnswer) return;
    const removed = selection.srcElement.getAttribute("removed") === "true";
    if (removed) return;
    if (!answerDiv.contains(selection.srcElement)) {
        answerDiv.childNodes.forEach(div =>{
            div.removeAttribute("data-notselected")
        });
        selectedAnswer = null;
        return;
    }
    if (selectedAnswer === selection.srcElement) {
        answerDiv.setAttribute("data-selectionconfirmed", "true");
        selectedAnswer.setAttribute("data-selected", "true");
        const correct = selectedAnswer.getAttribute("data-correct") === "true";
        if (correct && !questions[currentContent].dontAddPoints) {
            points += questions[currentContent].points
        }
        pointDiv.innerHTML = points;
        confirmedAnswer = true;
        return;
    }
    selectedAnswer = selection.srcElement;
    answerDiv.childNodes.forEach(div =>{
        div.setAttribute("data-notselected", "true");
    });
    selectedAnswer.removeAttribute("data-notselected")
};

const changeContent = function (contentName) {
    let content = document.getElementById(contentName); 
    content.classList.remove("hide");
    currentContentDiv.classList.add("hide");
    currentContentDiv = content;
};

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
};

const setQuestion = function(question) {
    jingle.play();

    addImage(question.image);

    promptDiv.innerHTML = question.prompt;
    if (!question.points){
        question.points = totalPoints - points;
    }
    newPointsDiv.innerHTML = question.points;
    answerDiv.innerHTML = "";
    answerDiv.removeAttribute("data-selectionconfirmed");
    question.answers.forEach(answer => {
        const newAnswer = document.createElement("div");
        newAnswer.innerHTML = answer.text;
        question.colorful && newAnswer.classList.add("colorful");
        newAnswer.setAttribute("data-correct", answer.correct);
        answerDiv.appendChild(newAnswer);
    });
    confirmedAnswer = false;
};
//setQuestion(currentContent);

const nextQuestion = function(selection) {
    if (!confirmedAnswer) return selectAnswer(selection);
    currentContent++;
    setContent(currentContent);
    selectedAnswer = null;
};

const nextContent = function(selection) {
    if (jokerDiv.contains(selection.srcElement)) return selectJoker(selection);
    if (contentIsQuestion) return nextQuestion(selection);
    currentContent++;
    setContent(currentContent);
};

let addImage = function(filename) {
    imgDiv.innerHTML = "";


    if(filename) {
        let filetype = filename.split('.')[1];

        if(filetype === "jpg" || filetype === "png") {
            imgDiv.innerHTML = `<img src="images/${filename}" />`;
        }
        else {
            imgDiv.innerHTML = `<video src="../${filename}" controls ></video>`;
        }

    }
};

let reviveJoker = false;
let usedJokers = 0;
const selectJoker = function (selection) {
    joker = selection.srcElement;
    if (reviveJoker) {
        if(joker.classList.contains("used")) {
            joker.classList.remove("used");
            reviveJoker = false;
            usedJokers--;
        };
        return;
    }
    if(joker.classList.contains("used")) return;
    if (joker.id =="50/50") {
        const wronganswers = [];
        const correctAnswers = [];
        let remainingAnswers = 0;
        for (answer of answerDiv.children) {
            const removed = answer.getAttribute("removed") === "true";
            if (removed) continue;
            remainingAnswers++;
            const correct = answer.getAttribute("data-correct") === "true";
            if (!correct) {
                wronganswers.push(answer);
            } else {
                correctAnswers.push(answer);
            }
        }
        let answersToChooseBetween = wronganswers;
        if (wronganswers.length === 0) {
            answersToChooseBetween = correctAnswers;
        }
        for (let i = 0; i<remainingAnswers/2; i++) {
            if (answersToChooseBetween.length === 0) break;
            const random = Math.floor(Math.random()*answersToChooseBetween.length);
            toRemove = answersToChooseBetween[random];
            toRemove.setAttribute("removed", true);
            answersToChooseBetween.splice(random,1);
        }
    }
    if (joker.id =="zombie") {
        if(!usedJokers) return;
        reviveJoker = true;
    }
    joker.classList.add("used");
    usedJokers++;
}

document.addEventListener("click", nextContent);
