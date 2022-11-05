import { questions } from './data/question.js';
import './models/questions.js'
import { Quiz } from './models/quiz.js';
import { UI } from './models/UI.js';

const renderPage = (quiz, ui) => {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
        quiz.guess(currentChoice)
        renderPage(quiz, ui)
    });    
};

function main(){
    const quiz = new Quiz(questions)
    const ui = new UI()
    console.log(quiz);

    renderPage(quiz, ui)
   
}

main()
