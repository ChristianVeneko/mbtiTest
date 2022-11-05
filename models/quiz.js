import { Questions } from "./questions.js"
export class Quiz {
    questionIndex = 0
    score = 0 

    /**
     * 
     * @param {Questions[]} questions 
     */
    constructor(questions){
        this.questions = questions;
    }


    getQuestionIndex(){
        return this.questions[this.questionIndex];

    }

    isEnder(){
        return this.questions.lenght == this.questionIndex;
    }

    /**
     * 
     * @param {string} answer algun texto
     */
    guess(answer){
        console.log(answer)
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.escore++
        }

        this.questionIndex++
    }

}
