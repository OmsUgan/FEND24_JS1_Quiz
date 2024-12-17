const quizCorrectAnswer = JSON.parse(localStorage.getItem('CorrectAnswers'));
const quizUserResultData = JSON.parse(localStorage.getItem('UserResultData'));
const quizResultText = document.getElementById("quiz-result");
const quizResultGradeText = document.getElementById("quiz-result-grade");

if (quizCorrectAnswer) {
    const correctAnswers = quizCorrectAnswer.correctAnswers;
    const totalQuestions = quizCorrectAnswer.totalQuestions;
    const percentage = (correctAnswers / totalQuestions) * 100;

    quizResultText.textContent = `Du svarade rätt på ${quizCorrectAnswer.correctAnswers} av ${quizCorrectAnswer.totalQuestions} frågor!`;

    if (percentage < 50) {
        quizResultGradeText.textContent = "Underkänd!";
        quizResultGradeText.classList.add("text-red-600");
    } else if (percentage >= 50 && percentage <= 75) {
        quizResultGradeText.textContent = "Bra!";
        quizResultGradeText.classList.add("text-orange-600");
    } else {
        quizResultGradeText.textContent = "Riktigt bra jobbat!";
        quizResultGradeText.classList.add("text-green-600");
    }
}