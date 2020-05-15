const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectButton =e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText ='Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
    }
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Q. The Paithan(Jayakwadi) Hydroelectric project, completed with the help of Japan,is on the river?',
        answers:[
            {text: '1.Ganga',correct: false},
            {text: '2.Sutlej',correct: false},
            {text:'3.Narmada',correct:false},
            {text:'4.Godavari',correct:true}


        ]
    },
    {
        question: 'Q. The percentage of irrigated land in India is about ?',
        answers:[
            {text: 'A. 35',correct: true},
            {text: 'B. 45',correct: false},
            {text:'C. 55',correct:false},
            {text:'D. 85',correct:false}
        ] 
    },
    {
        question: 'Q. Who has been appointed as the new chairman of Central Board of Indirect taxes and Customs (CBIC)?',
        answers:[
            {text: 'Johnjoseph',correct: false},
            {text: 'VanajaN.Sarna',correct: false},
            {text: 'S Ramesh',correct: true},
            {text: 'MahenderSingh',correct: false}
        ]
    },
    {
        question: 'Q. Where did NITI Aayog FinTech Conclave held?',
        answers:[
            {text: '1.Mumbai',correct: false},
            {text: '2.New Delhi',correct: true},
            {text: '3.Chennai',correct: false},
            {text: '4.Assam',correct: false}

        ]
    },
    {
        question: 'Q. India’s first-ever national police museum will establish in which city?',
        answers:[
            {text: '1.Delhi',correct: true},
            {text: '2.Jaipur',correct: false},
            {text: '3.Gujrat',correct: false},
            {text: '4.Mumbai',correct: false}

        ]
    },
    {
        question: 'Q. Which bank signed a loan agreement of USD 83 million line of credit to Congo to finance 3 solar power projects?',
        answers:[
            {text: '1.Central Bank of India',correct: false},
            {text: '2. Exim Bank',correct: true},
            {text: '3.National Housing Bank',correct: false},
            {text: '4.Dena Bank',correct: false}
            
        ]
    },
    {
        question: 'Q. Who will lead the Indian athletics team in Asian Championships?',
        answers:[
            {text: '1.Dharun Ayyasamy',correct: false},
            {text: '2.Mohd. Anas',correct: false},
            {text: '3.Tajinder Pal Singh Toor',correct: false},
            {text: '4.Neeraj Chopra',correct: true}
        ]
    },
    {
        question: 'Q.  Which country’s population consists mostly of Flemings and Walloons?',
        answers:[
            {text: '1.Paraguay',correct: false},
            {text: '2.Belgium',correct: true},
            {text: '3.USA',correct: false},
            {text: '4.Denmark',correct: false}
        ]
    },
    {
        question: 'Q. Which nut is attached to a yellow or red pear-shaped false fruit?',
        answers:[
            {text: '1.Almond',correct: false},
            {text: '2.Walnut',correct: false},
            {text: '3.Cashew nut',correct: true},
            {text: '4.Peanut',correct: false}
        ]
    },
    {
        question: 'Q. If you were a cartographer, what would you be studying?',
        answers:[
            {text: '1.Postcards',correct: false},
            {text: '2.None of these',correct: false},
            {text: '3.Coins',correct: false},
            {text: '4.Maps',correct: true}
        ]
    },
    {
        question: 'Q. Which leader did Mahatma Gandhi call the ‘Prince among Patriots?',
        answers:[
            {text: '1.Netaji Subhas Chandra bose',correct: true},
            {text: '2.Jawaharlal Nehru',correct: false},
            {text: '3.Vallabhbhai Patel',correct: false},
            {text: '4.Rajendra Prasad',correct: false}
        ]
    },
    {
        question: 'Q. Direction 20. In this question five words are given. Which of them will come in the middle if all of them are arranged alphabetically as in a dictionary?',
        answers:[
            {text: '1.Bitter',correct: false},
            {text: '2.Bicycle',correct: false},
            {text: '3.Bifocal',correct: false},
            {text: '4.Bishop',correct: true}
        ]
    },
    {
        question: 'Q. Japan-based Daiki Aluminium Industry is to set up a plant in __________, Andra Pradesh?',
        answers:[
            {text: '1.Chittoor',correct: false},
            {text: '2.Visakhapatnam',correct: false},
            {text: '3. Sri City',correct: true},
            {text: '4.Anantapur',correct: false}
        ]
    },
    {
        question: 'Q. Who will lead the Indian athletics team in Asian Championships?',
        answers:[
            {text: '1.Tajinder Pal Singh Toor',correct: false},
            {text: '2.Neeraj Chopra',correct: true},
            {text: '3.Mohd. Anas',correct: false},
            {text: '4.Dharun Ayyasamy',correct: false}
        ]
    },
    {
        question: 'Q. 23rd March is observed as __________.',
        answers:[
            {text: '1.World Meteorological Day',correct: true},
            {text: '2.No Smoking Day',correct: false},
            {text: '3.World Wildlife Day',correct: false},
            {text: '4.World Kidney Day',correct: false}
        ]
    },
]