export class Quiz {
    constructor(quizId, quizName, questions) {
        this.QuizId = quizId;
        this.QuizName = quizName;
        this.Questions = questions;
    }
}

export class Question {
    constructor(questionText, options, correctAnswer, type) {
        this.QuestionText = questionText;
        this.Options = options;
        this.CorrectAnswer = correctAnswer;
        this.Type = type;
    }
}

export function QuizzesFromStorage() {
    return JSON.parse(localStorage.getItem("AnkademinQuizes")) || [];
}