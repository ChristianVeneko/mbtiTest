 export class Questions{

    /**
     * @param {string} text texto para la pregunta
     * @param {string[]} choices opciones para la pregunta
     * @param {string[]} answer respuesta para la pregunta
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

    answer1(choice){
        return choice === this.answer[0];
    }

    answer2(choice){
        return choice === this.answer[1];
    }

    answer3(choice){
        return choice === this.answer[2];
    }

    answer4(choice){
        return choice === this.answer[3];
    }

    answer5(choice){
        return choice === this.answer[4];
    }
}