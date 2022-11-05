 export class Questions{

    /**
     * @param {string} text texto para la pregunta
     * @param {string[]} choices opciones para la pregunta
     * @param {string} answer respuesta para la pregunta
     */
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    
    /**
     * 
     * @param {string} choice cualquier opcion a validar
     * @returns {boolean} retorna true si la opcion es correcta   
     */
     correctAnswer(choice){
        return choice === this.answer;
    }
}

class QuestionMBTI{
    constructor(text, choice, answer, validAnswer){
        this.text = text;
        this.choice = choice;
        this.answer = answer;
        this.correctAnswe = validAnswer;
    }

    selectAnswer(choice){
        return choice === this.answer;
    }

    correctAnswer(choice){
        return choice === this.validAnswer;
    }
}

new Questions()