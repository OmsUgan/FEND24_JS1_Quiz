import { Quiz, Question } from "./classes.js";

const quizzesFromStorage = JSON.parse(localStorage.getItem("AnkademinQuizes")) || [];

if(quizzesFromStorage.length === 0) {
    const startQuiz1 = () => {
        const questionData = [
            {
                questionText: "Stockholm är huvudstaden i Sverige.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
            },
            {
                questionText: "Paris är känd som 'The Eternal City'.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            },
            {
                questionText: "New York City ligger vid floden Hudson.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
            },
            {
                questionText: "Tokyo är huvudstaden i Kina.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            },
            {
                questionText: "Vilken stad är känd som 'The Big Apple'?",
                options: ["New York", "Los Angeles", "Chicago", "Miami"],
                correctAnswer: "New York",
                type: "SingleAnswer"
            },
            {
                questionText: "Berlin är huvudstad i Tyskland.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
            },
            {
                questionText: "Rio de Janeiro ligger i Argentina.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            },
            {
                questionText: "Vilken av dessa städer är mest känd för sina kanaler?",
                options: ["Venedig", "Madrid", "Barcelona", "Paris"],
                correctAnswer: "Venedig",
                type: "SingleAnswer"
            },
            {
                questionText: "Sidney ligger i Australien.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
            },
            {
                questionText: "London är en stad i Frankrike.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            }
        ];

        return questionData.map(data => new Question(data.questionText, data.options, data.correctAnswer, data.type));
    };

    const startQuiz2 = () => {
        const questionData = [
            {
                questionText: "JavaScript är ett objektorienterat språk.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
              },
            {
                questionText: "I JavaScript används 'var' för att deklarera en variabel med blockscope.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            },
            {
                questionText: "Vad returnerar 'typeof 42' i JavaScript?",
                options: ["'number'", "'string'", "'undefined'", "'object'"],
                correctAnswer: "'number'",
                type: "SingleAnswer"
            },
            {
                questionText: "I JavaScript, vad gör 'console.log()'?",
                options: ["Visar ett meddelande i webbläsarens konsol", "Skapar en ny variabel", "Stoppar exekvering av programmet", "Skriver ut data på webbsidan"],
                correctAnswer: "Visar ett meddelande i webbläsarens konsol",
                type: "SingleAnswer"
            },
            {
                questionText: "Vilket av följande används för att definiera en funktion i JavaScript?",
                options: ["function()", "def()", "func()", "method()"],
                correctAnswer: "function()",
                type: "SingleAnswer"
            },
            {
                questionText: "I JavaScript används 'let' för att deklarera variabler med global scope.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Falskt",
                type: "TrueFalse"
            },
            {
                questionText: "Vad innebär det att använda 'const' för att deklarera en variabel i JavaScript?",
                options: ["Variabeln kan inte ändras", "Variabeln är global", "Variabeln är alltid en funktion", "Variabeln får bara tilldelas värde en gång"],
                correctAnswer: "Variabeln kan inte ändras",
                type: "SingleAnswer"
            },
            {
                questionText: "Vilken metod används för att lägga till ett element i slutet av en array i JavaScript?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: "push()",
                type: "SingleAnswer"
            },
            {
                questionText: "Vad gör 'return' i en funktion i JavaScript?",
                options: ["Avslutar funktionen och returnerar ett värde", "Visar ett meddelande i webbläsarens konsol", "Skapar ett nytt objekt", "Startar en ny funktion"],
                correctAnswer: "Avslutar funktionen och returnerar ett värde",
                type: "SingleAnswer"
            },
            {
                questionText: "JavaScript körs direkt i webbläsaren utan att behöva kompilera koden.",
                options: ["Sant", "Falskt"],
                correctAnswer: "Sant",
                type: "TrueFalse"
            }
        ];

        return questionData.map(data => new Question(data.questionText, data.options, data.correctAnswer, data.type));
    };

    const newQuiz = new Quiz(crypto.randomUUID(), "Städer Quiz", startQuiz1());
    const newQuiz2 = new Quiz(crypto.randomUUID(), "JavaScript Programmering Quiz", startQuiz2());

    quizzesFromStorage.push(newQuiz, newQuiz2);
    localStorage.setItem("AnkademinQuizes", JSON.stringify(quizzesFromStorage));
}