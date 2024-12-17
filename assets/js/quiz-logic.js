import { QuizzesFromStorage } from "./classes.js";

const quizzesFromStorage = QuizzesFromStorage();
const quizAvailableDivBlock = document.getElementById("available-quizzes");
const quizLayoutDivBlock = document.getElementById("quiz-layout");

const quizQuestion = document.getElementById("quiz-question");
const quizCounter = document.getElementById("quiz-question-counter");
const quizOptions = document.getElementById("quiz-options");
const quizProgressBar = document.getElementById("quiz-progressbar");

let maxQuestions = 0;
let selectedQuiz;
let currentQuestion = {};
let currentQuestionIndex = 0;
let correctAnswers = 0;

export class Game {

    getSelectQuiz = (e) => {
        const quizId = e.target.id;
        console.log(quizId);
    
        selectedQuiz = quizzesFromStorage.find(q => q.QuizId === quizId);
        maxQuestions = selectedQuiz.Questions.length;
        console.log(selectedQuiz);
    
        this.getQuestions(selectedQuiz);
        quizAvailableDivBlock.classList.add("hidden");
        quizLayoutDivBlock.classList.remove("hidden");
    }

    getQuestions = (quiz) => {
        currentQuestion = quiz.Questions[currentQuestionIndex];
        console.log(quiz);

        quizQuestion.textContent = currentQuestion.QuestionText;
        quizCounter.textContent = `Fråga ${currentQuestionIndex + 1} av ${maxQuestions}`;
        quizProgressBar.style.width = `${((currentQuestionIndex + 1) / maxQuestions) * 100}%`;

        quizOptions.innerHTML = "";

        currentQuestion.Options.forEach((option) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("relative", "flex", "items-start");
        
            const optionInputDiv = document.createElement("div");
            optionInputDiv.classList.add("flex", "h-10", "items-center");
        
            const optionInputRadio = document.createElement("input");
            optionInputRadio.classList.add("relative", "size-4", "appearance-none", "rounded-full", "border", "border-gray-300", "bg-white", "before:absolute", "before:inset-1", "before:rounded-full", "before:bg-white", "checked:border-gray-400", "checked:bg-gray-400", "dark:checked:border-gray-800", "dark:checked:bg-gray-800", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600", "disabled:border-gray-300", "disabled:bg-gray-100", "disabled:before:bg-gray-400", "forced-colors:appearance-auto", "forced-colors:before:hidden", "[&:not(:checked)]:before:hidden");
            optionInputRadio.type = "radio";
            optionInputRadio.name = "answer";
            optionInputRadio.value = option;

            optionInputRadio.addEventListener("change", () => {
                this.checkAnswer(option);
            });

            optionInputDiv.append(optionInputRadio);
        
            const optionLabelDiv = document.createElement("div");
            optionLabelDiv.classList.add("ml-3", "text-sm/6");
        
            const optionLabel = document.createElement("label");
            optionLabel.classList.add("text-2xl", "text-gray-900", "dark:text-white");
            optionLabel.textContent = option;
            
            optionLabelDiv.append(optionLabel);
            optionDiv.append(optionInputDiv, optionLabelDiv);
            quizOptions.append(optionDiv);
        });
    }

    checkAnswer = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.CorrectAnswer) {
            correctAnswers++;
        }
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex < maxQuestions) {
            this.getQuestions(selectedQuiz);
        } else {
            this.showResults();
        }
    }
    
    showResults = () => {
        localStorage.setItem('CorrectAnswers', correctAnswers);
        return window.location.assign('result.html');
    }

}