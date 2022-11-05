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
        console.log(choisesContainter);
        choisesContainter.innerHTML = ""
        for (let i = 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[i]));

            choisesContainter.append(button);
        }
    } 
}