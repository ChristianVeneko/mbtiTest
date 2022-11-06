import { Questions } from "./questions.js"
export class Quiz {
    questionIndex = 0
    score = 0 
    score1 = 0
    score2 = 0
    score3 = 0
    score4 = 0
    score5 = 0
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

        if(this.getQuestionIndex().answer1(answer)){
            console.log("hola")
            this.score1++
        }

        if(this.getQuestionIndex().answer2(answer)){
            console.log("epa")
            this.score2++
        }

        if(this.getQuestionIndex().answer3(answer)){
            console.log("chamo")
            this.score3++
        }

        if(this.getQuestionIndex().answer4(answer)){
            console.log("causa")
            this.score4++
        }

        if(this.getQuestionIndex().answer5(answer)){
            console.log("XDD")
            this.score4++
        }


        this.questionIndex++
    }

    sacarPorcentaje(cantidadPreguntas, escore){
        this.porcentaje = escore * 100 / cantidadPreguntas
    }
}
