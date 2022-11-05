import { Questions } from "./questions.js"
export class Quiz {
    questionIndex = 0
    score = 0 
    porcentaje = 0

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

    isEnded(){
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer algun texto
     */
    guess(answer){
        console.log(answer)
        if(this.getQuestionIndex().correctAnswer(answer)){
            console.log("mano")
            this.score++
        }
        this.questionIndex++
    }

    sacarPorcentaje(cantidadPreguntas, escore){
        this.porcentaje = escore * 100 / cantidadPreguntas
    }
}
