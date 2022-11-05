import { questions } from './data/question.js';
import './models/questions.js'
import { Quiz } from './models/quiz.js';
import { UI } from './models/UI.js';

function main(){
    const quiz = new Quiz(questions)
    const ui = new UI()
    console.log(quiz);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, () => console.log('we'));
}

main()
