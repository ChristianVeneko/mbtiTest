import { Questions } from "./questions.js"
export class Quiz {
    questionIndex = 0
    score = 0
    porcentaje = 0
    scores = [0,0,0,0,0]
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
            this.scores[0]++
        }

        if(this.getQuestionIndex().answer2(answer)){
            console.log("epa")
            this.scores[1]++
        }

        if(this.getQuestionIndex().answer3(answer)){
            console.log("chamo")
            this.scores[2]++
        }

        if(this.getQuestionIndex().answer4(answer)){
            console.log("causa")
            this.scores[3]++
        }

        if(this.getQuestionIndex().answer5(answer)){
            console.log("XDD")
            this.scores[4]++
        }


        this.questionIndex++
    }

    
    sacarPorcentaje(cantidadPreguntas, score){
        this.porcentaje = score * 100 / cantidadPreguntas
    }
}
