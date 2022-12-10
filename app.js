import { questions } from './data/question.js';
import { questions2 } from './data/question.js';
import { questions3 } from './data/question.js';
import { questions4 } from './data/question.js';
import { allQuestions } from './data/question.js';
import './models/questions.js'
import { Quiz } from './models/quiz.js';
import { UI } from './models/UI.js';

/**
 * 
 * @param {Quiz} quiz el objeto quiz principal
 * @param {UI} ui objeto ui
 */

const renderPage = (quiz, ui) => {
    
    if(quiz.isEnded()){
        console.log(quiz.scores[0]);
        console.log(quiz.scores[1]);

        quiz.sacarPorcentaje(quiz.questions.length, quiz.score)
        ui.showScore(quiz.score, quiz.porcentaje, quiz.questions.length);
        console.log("Quiz finalizado"); //pronto se mostrara los resultados del test
    
    }else {
        ui.showProgess(quiz.questionIndex + 1, quiz.questions.length)
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui)
        });
    }     
     
};

function main(){
    const quiz = new Quiz(questions)
    const ui = new UI()
    console.log(questions2.length)
    console.log(questions3.length)
    console.log(questions4.length)
    console.log(allQuestions)
    console.log(allQuestions.length)
    console.log(quiz);

    renderPage(quiz, ui)
   
}

main()
