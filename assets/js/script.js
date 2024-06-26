//Selection of required elements
const startButton = document.getElementById('start-btn');
const rulesButton = document.getElementById('open-modal');
const homeContainer = document.getElementById('home-container');
const scoreText = document.getElementById('score-text');
const scoreNumber = document.getElementById('score-number');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainerElement = document.getElementById('results-container');
// const showResults = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-btn');

//Variables for game function
let currentQuestion = 0;
let score = 0;
// let questionCounter = 0;

// let shuffledQuestions, currentQuestionIndex;

// Start quiz and display next question event listeners when buttons are clicked.//
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestion++
  showNextQuestion()
});

function startQuiz() {
  startButton.classList.add('hide')
  homeContainer.classList.add('hide')
  rulesButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)  //shuffle questions//
  currentQuestion = 0;
  score = 0;
  // questionContainerElement.classList.remove('hide')
  showNextQuestion()
};

function showNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestion])
};

// may change //
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
};

// may change //
function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
 
  correct === 'true' && score++;
  scoreNumber.innerHTML = score;
  
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove('hide')
  } else {
    // startButton.innerText = 'Restart'
    // startButton.classList.remove('hide')
    // resultContainerElement.classList.remove('hide');
    window.location.href = 'end.html';
    showResults();
  }
};

function showResults() {
  questionContainerElement.classList.add('hide')
  resultsContainerElement.classList.remove('hide')
  // showResults.classList.remove('hide')

}

//  let setStatusClass = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('incorrect')
  }
};


// if (selectedButton === correct) {
//   button.classList.add("correct");
// } else {
//   button.classList.add("incorrect");
// }

//creating div tags for icons
let correct ='<div class="happy face><i class="fa-regular fa-face-smile"></i></div>';
let inCorrect ='<div class="sad face><i class="fa-regular fa-face-frown"></i>'

function clearStatusClass(element) {
  element.classList.remove('correct', 'incorrect')
};


const questions = [
  {
      question: "What is the average lifespan of sloths in the wild?",
  
      answers: [
        { text: "15-20 years", correct: false },
        { text: "20-25 years", correct: true },
        { text: "30-35 years", correct: false },
        { text: "40-45 years", correct: false },
      ],
  },
  {
      question: "How many hours does it take for a sloth to digest a meal?",
  
      answers: [
        { text: "6-8 hours", correct: false },
        { text: "12-24 hours", correct: false },
        { text: "36-48 hours", correct: true, },
        { text: "72-96 hours", correct: false },
      ],
  },
  {
      question: "Which of the following is true about sloths fur?",
  
      answers: [
        { text: "It is naturally blue in colour", correct: false },
        { text: "It grows in the opposite direction to other mammals", correct: true },
        { text: "It sheds once a year", correct: false },
        { text: "It is resistant to parasites", correct: false },
      ],
  },

  {
      question: "What is the weight of a newborn sloth?",
  
      answers: [
        { text: "1-2 pounds", correct: true },
        { text: "3-5 pounds", correct: false },
        { text: "6-8 pounds", correct: false },
        { text: "9-11 pounds", correct: false },
      ],
  },

  {
      question: "Who is a natural predator of sloths?",
  
      answers: [
        { text: "jaguars", correct: true },
        { text: "elephants", correct: false },
        { text: "crocodiles", correct: false },
        { text: "gorillas", correct: false },
      ],
  },

  {
      question: "Where are sloths found in the wild?",
  
      answers: [
        { text: "Africa", correct: false },
        { text: "Asia", correct: false },
        { text: "Australia", correct: false },
        { text: "Central and South America", correct: true },
      ],
  },

  {
      question: "How many hours a day do sloths sleep?",
  
      answers: [
        { text: "8-10 hours", correct: false },
        { text: "10-12 hours", correct: false },
        { text: "12-14 hours", correct: true },
        { text: "14-16 hours", correct: false },
      ],
  },

  {
      question: "How many chambers does a sloth stomach have?",
  
      answers: [
        { text: "one", correct: false },
        { text: "two", correct: true },
        { text: "three", correct: false },
        { text: "four", correct: false },
      ],
  },

  {
      question: "Which sense is the best for sloths?",
  
      answers: [
        { text: "sight", correct: false },
        { text: "taste", correct: false },
        { text: "touch", correct: false },
        { text: "smell", correct: true },
      ],
  },
  {
      question: "What is the main diet of a sloth?",
  
      answers: [
        { text: "insects", correct: false },
        { text: "meat", correct: false },
        { text: "leaves", correct: true },
        { text: "fish", correct: false },
      ],
  }
]