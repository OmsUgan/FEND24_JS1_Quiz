// Importerar klasser från "classes.js" och "quiz-logic.js"
import { QuizzesFromStorage } from "./classes.js";
import { Game } from "./quiz-logic.js";

const quizzesFromStorage = QuizzesFromStorage();
const quizAvailableDivBlock = document.getElementById("available-quizzes");

// Funktion som listar tillgängliga quzzies i html
const loadQuizList = () => {
    const quizStatusText = document.getElementById("quiz-status");

    // Kontrollerar om det finns quizzes i localstorage
    if (quizzesFromStorage.length === 0) {

        // Om det inte finns quizzes visas texten nedan
        quizStatusText.textContent = "Finns inga quiz!";
        quizStatusText.classList.remove("pb-5")
    } else {

        // Skapar element och listar quizzes
        quizStatusText.textContent = "Tillgängliga quiz";

        const quizUl = document.createElement("ul");
        quizUl.id = "quiz-list";
        quizUl.classList.add("space-y-2");

        quizzesFromStorage.forEach(q => {
            const quizLi = document.createElement("li");
            const quizButton = document.createElement("button");
    
            quizButton.textContent = q.QuizName;
            quizButton.id = q.QuizId;
            quizButton.classList.add("w-full", "rounded-md", "bg-white", "dark:bg-gray-700", "px-3.5", "py-2.5", "text-lg", "font-medium", "text-gray-900", "dark:text-white", "hover:bg-gray-100", "dark:hover:bg-gray-800");

            quizButton.addEventListener("click", new Game().getSelectQuiz);

            quizLi.append(quizButton);
            quizUl.append(quizLi);
            
        });
        quizAvailableDivBlock.append(quizUl);
    }
}

loadQuizList();