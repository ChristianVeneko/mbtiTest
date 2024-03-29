import {texts} from '../data/datatext.js'

export class UI {
    constructor(){}

    /**
     * @param {string} text
     */
    showQuestion(text){
       const questionTitle = document.getElementById("question")
       questionTitle.innerHTML = text;
    }
    QuestionIndex = 0

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

    showProgess(){
        this.QuestionIndex = this.QuestionIndex + 1
        const estatus = `
        <p>Pregunta ${this.QuestionIndex}, de ${44}</p>        
        `
        const element = document.getElementById('progress')
        element.innerHTML = estatus
    }

    /**
     * 
     * @param {string} mbti resultado del test
     */
    showResults(mbti){
        let text = ""
        let img = ""
        console.log(texts);
        if(mbti == "ENFJ"){
            img = "https://i.pinimg.com/originals/c7/08/08/c70808cd3a0ba32a7f5254906c38f88d.png" 
            text = texts.ENFJ
        }else if(mbti == "ENFP"){
            img = "https://i.pinimg.com/originals/6a/5a/d0/6a5ad07acfec36e2df85195ff47afb00.png" 
            text = texts.ENFP
        }else if(mbti == "ENTJ"){
            img = "https://i.pinimg.com/originals/53/bf/77/53bf777384e9be8ceb1af21a1c79b611.png" 
            text = texts.ENTJ
        }else if(mbti == "ENTP"){
            img = "https://i.pinimg.com/originals/be/b5/79/beb579b2a4fa94fc81633eae992bf4cf.png"
            text = texts.ENTP
        }else if(mbti == "ESFJ"){
            img = "https://i.pinimg.com/originals/02/00/64/020064d0aecae42519d2818b0c6f8b94.png" 
            text = texts.ESFJ
        }else if(mbti == "ESFP"){
            img = "https://i.pinimg.com/originals/a3/d1/e7/a3d1e71bbe3dba8fff471a9963643333.png"
            text = texts.ESFP
        }else if(mbti == "ESTJ"){
            img = "https://i.pinimg.com/originals/66/e7/6d/66e76d694d3e3135f79abc78c4b4dfc6.png" 
            text = texts.ESTJ
        }else if(mbti == "ESTP"){
            img = "https://i.pinimg.com/originals/0f/99/57/0f9957d4c620ff1acd90e44d42743693.png" 
            text = texts.ESTP
        }else if(mbti == "INFJ"){
            img = "https://i.pinimg.com/originals/19/7f/cb/197fcbb50ff006b9d3e028bb8ee2a04a.png"
            text = texts.INFJ
        }else if(mbti == "INFP"){
            img = "https://i.pinimg.com/originals/52/be/0e/52be0ee053f423e367b428d7c3c83520.png"
            text = texts.INFP
        }else if(mbti == "INTJ"){
            img = "https://i.pinimg.com/originals/e7/28/69/e72869626473f682498fa78c0e317195.png"
            text = texts.INTJ
        }else if(mbti == "INTP"){
            img = "https://static.wikia.nocookie.net/trufax/images/c/c7/Intp.png/revision/latest?cb=20160224133050"
            text = texts.INTP
        }else if(mbti == "ISFJ"){
            img = "https://i.pinimg.com/originals/7b/e8/4b/7be84bfa583fd9c088b9a39c37c8b128.png"
            text = texts.ISFJ
        }else if(mbti == "ISFP"){
            img = "https://i.pinimg.com/originals/21/d3/30/21d330d9cc29526c61546bcd31c5b051.png"
            text = texts.ISFP
        }else if(mbti == "ISTJ"){
            img = "https://i.pinimg.com/originals/3e/ff/d4/3effd4a1437af491adefa54936d611d7.png"
            text = texts.ISTJ
        }else if(mbti == "ISTP"){
            img = "https://i.pinimg.com/originals/53/33/32/533332eb28b771dc09e975d79baba988.png"
            TEXT = texts.ISTP
        }
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tu MBTI es: ${mbti}
        <br>
        <br>
        <img src=${img} height="200" alt="">
        <p class="textResult">${text}</p>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }
    
}