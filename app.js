import { questions } from './data/question.js';
import { questions2 } from './data/question.js';
import { questions3 } from './data/question.js';
import { questions4 } from './data/question.js';
import './models/questions.js'
import { Quiz } from './models/quiz.js';
import { UI } from './models/UI.js';

/**
 * 
 * @param {Quiz} quiz el objeto quiz principal
 * @param {UI} ui objeto ui
 */
const renderPage = (quiz, ui, quiz2, quiz3, quiz4) => {
    if(quiz.isEnded()){
        console.log("Puntos I: " + quiz.scores[0])
        console.log("Puntos E: " + quiz.scores[1])
        renderPage2(quiz, ui, quiz2, quiz3, quiz4);
    }else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui, quiz2, quiz3, quiz4)
        });
    }     
     
};

const renderPage2 = (quiz, ui, quiz2, quiz3, quiz4) => {
    if(quiz2.isEnded()){
        console.log("Puntos N: " + quiz2.scores[0])
        console.log("Puntos S: " + quiz2.scores[1])
        renderPage3(quiz, ui, quiz2, quiz3, quiz4);
    }else {
        ui.showQuestion(quiz2.getQuestionIndex().text);
        ui.showChoices(quiz2.getQuestionIndex().choices, (currentChoice) => {
            quiz2.guess(currentChoice);
            renderPage2(quiz, ui, quiz2, quiz3, quiz4)
        });
    }        
};

const renderPage3 = (quiz, ui, quiz2, quiz3, quiz4) => {
    if(quiz3.isEnded()){
        console.log("Puntos F: " + quiz3.scores[0])
        console.log("Puntos T: " + quiz3.scores[1])
        renderPage4(quiz, ui, quiz2, quiz3, quiz4);
    }else {
        ui.showQuestion(quiz3.getQuestionIndex().text);
        ui.showChoices(quiz3.getQuestionIndex().choices, (currentChoice) => {
            quiz3.guess(currentChoice);
            renderPage3(quiz, ui, quiz2, quiz3, quiz4)
        });
    }        
};

const renderPage4 = (quiz, ui, quiz2, quiz3, quiz4) => {
    if(quiz4.isEnded()){
        console.log("Puntos J: " + quiz4.scores[0])
        console.log("Puntos P: " + quiz4.scores[1])
        console.log("FIN")
    }else{
        ui.showQuestion(quiz4.getQuestionIndex().text);
        ui.showChoices(quiz4.getQuestionIndex().choices, (currentChoice) => {
            quiz4.guess(currentChoice);
            renderPage4(quiz, ui, quiz2, quiz3, quiz4)
        });
    }        
};

function main(){
    const quiz = new Quiz(questions)
    const ns = new Quiz(questions2)
    const ft = new Quiz(questions3)
    const jp = new Quiz(questions4)
    const ui = new UI()


    renderPage(quiz, ui, ns, ft, jp);
   
}

main()
