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
    
    
    answer1(choice){
        return choice === this.answer[0];
    }

    answer2(choice){
        return choice === this.answer[1];
    }
}