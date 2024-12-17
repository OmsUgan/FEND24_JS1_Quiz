// Hämtar användarens slut result och totala frågor från localstorage
const quizCorrectAnswer = JSON.parse(localStorage.getItem('CorrectAnswers'));
//const quizUserResultData = JSON.parse(localStorage.getItem('UserResultData'));
const quizResultText = document.getElementById("quiz-result");
const quizResultGradeText = document.getElementById("quiz-result-grade");

// Kontroll om data finns i localstorage
if (quizCorrectAnswer) {

    const correctAnswers = quizCorrectAnswer.correctAnswers;
    const totalQuestions = quizCorrectAnswer.totalQuestions;

    // Gör om användarens slut resultat till procent
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Visar användarens slutresultat i text
    quizResultText.textContent = `Du svarade rätt på ${quizCorrectAnswer.correctAnswers} av ${quizCorrectAnswer.totalQuestions} frågor!`;

    // Visar användarens betyg beroende procent
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