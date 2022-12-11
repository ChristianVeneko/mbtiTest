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
     * @param {string} mbti resultado del test
     */
    showResults(mbti){
        let img = ""
        
        if(mbti == "ENFJ"){
            img = "/images/ENFJ.png" 
        }else if(mbti == "ENFP"){
            img = "/images/enfp.png" 
        }else if(mbti == "ENTJ"){
            img = "/images/ENTJ.png" 
        }else if(mbti == "ENTP"){
            img = "/images/ENTP.png"
        }else if(mbti == "ESFJ"){
            img = "/images/ESFJ.png" 
        }else if(mbti == "ESFP"){
            img = "/images/esfp.png"
        }else if(mbti == "ESTJ"){
            img = "/images/estj.png" 
        }else if(mbti == "ESTP"){
            img = "/images/estp.png" 
        }else if(mbti == "INFJ"){
            img = "/images/INFJ.png"
        }else if(mbti == "INFP"){
            img = "/images/INFP.png"
        }else if(mbti == "INTJ"){
            img = "/images/intJ.png"
        }else if(mbti == "INTP"){
            img = "/images/INTP.png"
        }else if(mbti == "ISFJ"){
            img = "/images/ISFJ.png"
        }else if(mbti == "ISFP"){
            img = "/images/isfp.png"
        }else if(mbti == "ISTJ"){
            img = "/images/istj.png"
        }else if(mbti == "ISTP"){
            img = "/images/istp.png"
        }
        
        "/images/ISFJ.png"
        "/images/isfp.png"
        "/images/istj.png"
        "/images/istp.png"
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tu MBTI es: ${mbti}
        <br>
        <br>
        <img src=${img} height="200" alt="">
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }
    
}