export class UI {
    constructor(){}

    /**
     * @param {string} text
     */
    showQuestion(text){
       const questionTitle = document.getElementById("question")
       questionTitle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} choices opciones a mostrar
     */
    showChoices(choices, callback){
        const choisesContainter = document.getElementById('choices')
        choisesContainter.innerHTML = ""

        for (let i = 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[i]));
            choisesContainter.append(button);
        }
    } 

    /**
     * 
     * @param {number} score puntaje que se mostrara en pantalla
     */
    showScore(score, porcentaje){
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Your escore is: ${score}</h2>
        <h2>Tu porcentaje es: ${porcentaje}%</h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }
}