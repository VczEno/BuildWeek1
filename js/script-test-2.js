// TIMER, ANNA //  //INSERITO TUTTO IL TIMER IN UNA FUNZIONE

function timer() {
  let timerLimit = 5;
  let spanTimer = document.querySelector("#timer_number"); //queryselector da definire
  let secondi = timerLimit;



  let timerInterval = setInterval(() => {   //Applico la function setInterval che "fa cose per ogni intervallo (vedi ultimo rigo)"
    if (secondi === 0) {
      /* let insideCircle = document.querySelector(".inside_circle")
      insideCircle.innerHTML = "<p>&nbsp</p>"  */
      clearInterval(timerInterval)
      selectedAnswer()
      timer()
        // console.log("timer");
        ;        //se secondi è zero fermati, altrimenti leeeesgooo */ 
    } else {
      let timerText1 = document.querySelector(".timer_text1")
      let timerText2 = document.querySelector(".timer_text2")

      spanTimer.innerText = secondi--;    // = non += pd perchè il + concatena   //itera all'indietro da 31 secondi (timerLimit)
      timerText1.innerText = "SECONDS"
      timerText2.innerText = "REMAINING"


    }
  }, 1000);
}  //Intervallo espresso in ms 1000ms = 1s


// ITERAZIONE DOMANDE, FELIPE //
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let currentQuestionIndex = [];

const questionElement = document.getElementById("question");
const labels = document.querySelectorAll("label");

/* let currentQuestionIndex = 0; */ // incrementare quando finisca la domanda */  //ERA CONST E DICEVA CHE NON POTEVA ESSERE GIUSTAMENTE MODIFICATA
function randomQuestInd() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let n = 10
  for (let i = 0; i < 10; i++) {
    let ran = (Math.floor(Math.random() * n))
    currentQuestionIndex.push(...(arr.splice(ran, 1)))
    n--
    
  }
  console.log('indici casuali domande' + currentQuestionIndex)

}
randomQuestInd()

const assignQuestionsandAnswers = () => {  //RIMOSSO IL PARAMETRO CHE JE DAVA FASTIDIO
  questionElement.textContent = questions[currentQuestionIndex[0]].question;     //question assignment in "question" h2
  const tutteRisposte = [questions[currentQuestionIndex[0]].correct_answer, ...questions[currentQuestionIndex[0]].incorrect_answers,]; //every answer together
  const tutteRisposteSort = tutteRisposte.sort(() => Math.random() - 0.5);    //randomize the answers così la prima non è sempre la corretta
  labels.forEach((label, index) => {      //risposte assignment in all labels
    label.textContent = tutteRisposteSort[index];
    label.addEventListener('click', selectedAnswer)
  })
  //AGGIUNTO EVENT LISTENER DI INPUT SELECTION DIRETTAMENTE QUI , altrimenti non trovava le etichette 

  if (tutteRisposte.length === 2) {
    labels[2].style.display = "none";
    labels[3].style.display = "none";  //hides the last two labels when there's only 2 answers
  } else {
    labels[2].style.display = "inline-block";
    labels[3].style.display = "inline-block";  //hides the last two labels when there's only 2 answers
  }

  if (questionElement.textContent.length > 30) {
    questionElement.style.fontSize = "2.4em";
  }

}

/* function selectedAnswer() {

  let questionN=document.querySelector('h4')
  let numberQuestions = document.querySelector(".newQuestion");
  currentQuestionIndex.shift();
  let indiceQuestion=(questions.length+1)-currentQuestionIndex.length;//SI CREA L'11
  if (currentQuestionIndex.length > 0) {
    assignQuestionsandAnswers();
  } else {
    questionN.innerHTML=''
      location.href = "results.html", true;  //FIXATO. Con window dava errore. con location funzia
  }
  numberQuestions.innerText = indiceQuestion
}  */
let correctAnswersCounter = 0; // variabile contatore delle risposte corrette, va dichiarata globalmente!

function selectedAnswer(event) { // riduce il numero delle domande possibili
  
  let questionN = document.querySelector('h4') 
  let numberQuestions = document.querySelector(".newQuestion"); //elementi per incrementare in basso il numero della domanda
  const userAnswer = event.currentTarget.innerText; //salvo la risposta dell'utente nella variabile
  console.log('risposta utente='+userAnswer)
  const correctAnswer = questions[currentQuestionIndex[0]].correct_answer; //salvo la risposta corretta
  console.log('risposta corretta='+correctAnswer)

  if (userAnswer === correctAnswer) {
    correctAnswersCounter++; // se corretta incremento il numero di risposte corrette
  }
  console.log("Correct answers: " + correctAnswersCounter);
  currentQuestionIndex.shift(); // elimino il primo elemento dell'array IndiciDomande per scorrere le domande
  if (currentQuestionIndex.length > 0) { // se le domande non sono finite ne appare un altra a schermo
    
    console.log(currentQuestionIndex) // stampa ogni volta un array di meno elementi, ovvero gli indici delle domande rimaste
    numberQuestions.innerText = (questions.length + 1) - currentQuestionIndex.length; // incrementa il numero della domanda, senza mostrare l'11
    assignQuestionsandAnswers();

  } else {   // domande finite, link ai risultati
    sessionStorage.setItem("risposte esatte", correctAnswersCounter)
    questionN.innerHTML = ''
    location.href = "results.html", true;  //FIXATO. Con window dava errore. con location funzia 
  }


}

/* 
timer() */
assignQuestionsandAnswers()
