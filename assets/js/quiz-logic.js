import { QuizzesFromStorage } from "./classes.js";

const quizzesFromStorage = QuizzesFromStorage();
const quizAvailableDivBlock = document.getElementById("available-quizzes");

let maxQuestions = 0;
let questions = [];

export class Game {

    selectQuiz = (e) => {
        const quizId = e.target.id;
        console.log(quizId);
    
        const getSelectedQuiz = quizzesFromStorage.find(q => q.QuizId === quizId);
        maxQuestions = getSelectedQuiz.Questions.length;
        console.log(maxQuestions);
    
        this.getQuestions(getSelectedQuiz);
        quizAvailableDivBlock.classList.add("hidden");
    }

}