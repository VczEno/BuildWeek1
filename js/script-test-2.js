// Array delle domande //
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

const questionElement = document.getElementById("question");
const labels = document.querySelectorAll("label");

// \/ Array vuoto in cui inserirò dei numeri da 0-9 in ordine casuale che saranno gli indici delle domande.
let currentQuestionIndex = []; 
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

const assignQuestionsandAnswers = () => {  
  questionElement.textContent = questions[currentQuestionIndex[0]].question;   
  //question assignment in "question" h2
  const tutteRisposte = [questions[currentQuestionIndex[0]].correct_answer, ...questions[currentQuestionIndex[0]].incorrect_answers,]; 
  // \/ every answer together => Array concatenato di risposta esatta ad indice 0 + risposte inesatte ad indice 0
  //console.log(tutteRisposte);
  const tutteRisposteSort = tutteRisposte.sort(() => Math.random() - 0.5);    
  //randomize the answers così la prima non è sempre la corretta
  // \/ Per ogni label (4) assegno un textContent di ogni indice (4)
  labels.forEach((label, index) => {      //risposte assignment in all labels
    label.textContent = tutteRisposteSort[index];
    // \/ Aggiungo come evento al click la funzione selected
    label.addEventListener('click', selectedAnswer)
    //\/ prova settimeout
    label.addEventListener('click', () => {
      animation.classList.remove("animate")
      resetTimer()
      //timer()

    })
    
  })
  //AGGIUNTO EVENT LISTENER DI INPUT SELECTION DIRETTAMENTE QUI , altrimenti non trovava le etichette 
  if (tutteRisposte.length === 2) {
    labels[2].style.display = "none";
    labels[3].style.display = "none";  //hides the last two labels when there's only 2 answers
  } else {
    labels[2].style.display = "inline-block";
    labels[3].style.display = "inline-block";  
  }

  if (questionElement.textContent.length > 30) {
    questionElement.style.fontSize = "2em";
  }

}

let correctAnswersCounter = 0; // variabile contatore delle risposte corrette, va dichiarata globalmente!
let numberQuestions = document.querySelector(".newQuestion"); //elementi per incrementare in basso il numero della domanda
let questionN = document.querySelector('h4') 

// Seleziona i suoni
let correctSE = document.querySelector('#correct') //VIN FEEDBACK SONORO
let wrongSE = document.querySelector('#wrong') //VIN FEEDBACK SONORO

function selectedAnswer(event) { // riduce il numero delle domande possibili
  
  const userAnswer = event.currentTarget.innerText; //salvo la risposta dell'utente nella variabile
  console.log('risposta utente='+userAnswer)
  const correctAnswer = questions[currentQuestionIndex[0]].correct_answer; //salvo la risposta corretta
  console.log('risposta corretta='+correctAnswer)

  if (userAnswer === correctAnswer) {
    correctAnswersCounter++; // se corretta incremento il numero di risposte corrette
    setTimeout(correctSE.play(), 1) // VIN FEEDBACK SONORO
  } else { // VIN FEEDBACK SONORO
    setTimeout(wrongSE.play(), 1) // VIN FEEDBACK SONORO
  } // VIN FEEDBACK SONORO

  console.log("Correct answers: " + correctAnswersCounter);

  currentQuestionIndex.shift(); // elimino il primo elemento dell'array IndiciDomande per scorrere le domande
  if (currentQuestionIndex.length > 0) { // se le domande non sono finite ne appare un altra a schermo
    
    console.log(currentQuestionIndex) // stampa ogni volta un array di meno elementi, ovvero gli indici delle domande rimaste
    numberQuestions.innerText = (questions.length + 1) - currentQuestionIndex.length; // incrementa il numero della domanda, senza mostrare l'11
    assignQuestionsandAnswers();

  } else {   // domande finite, link ai risultati
    sessionStorage.setItem("risposte esatte", correctAnswersCounter)
    questionN.innerHTML = ''
    setTimeout (() => {location.href = "results.html", true;}, 500 )  //FIXATO. Con window dava errore. con location funzia 
  }

}


// \/ FUNZIONE TIMER \/ 
// Variabili globali perchè servono sia nel timer chee nel reset timer 
let timerLimit = 30;     //Impostare a 30/60
let spanTimer = document.querySelector("#timer_number")
let timerText1 = document.querySelector(".timer_text1")
let timerText2 = document.querySelector(".timer_text2")
let animation = document.querySelector(".pie")

 function timer() {

  let timerInterval = setInterval(() => {
    spanTimer.innerHTML = timerLimit--
    timerText1.innerText = "SECONDS"
    timerText2.innerText = "REMAINING"
    animation.classList.add("animate")

    if (timerLimit === -1) {
      clearInterval(timerInterval)
      /* alert("tempo scaduto") */
      /* randomQuestInd() */
      console.log("assegno nuova domanda"); 
      // \/ Utilizzo righe di codice di selectedAnswer perchè allo scadere del timer deve fare le stesse identiche cose di quando clicco su una risposta
      currentQuestionIndex.shift(); // elimino il primo elemento dell'array IndiciDomande per scorrere le domande
      if (currentQuestionIndex.length > 0) { // se le domande non sono finite ne appare un altra a schermo        
      console.log(currentQuestionIndex) // stampa ogni volta un array di meno elementi, ovvero gli indici delle domande rimaste
      numberQuestions.innerText = (questions.length + 1) - currentQuestionIndex.length; // incrementa il numero della domanda, senza mostrare l'11
      assignQuestionsandAnswers();
      // Ma in più aggiungo il reset del timer, così al cambiare della domanda il timer riparte
      resetTimer()
      timer()
      console.log("reset timer nel timer");     
      } else {   // domande finite, link ai risultati
        sessionStorage.setItem("risposte esatte", correctAnswersCounter)
        questionN.innerHTML = ''
        setTimeout (() => {location.href = "results.html", true;},500 )//FIXATO. Con window dava errore. con location funzia 
      } 
    }
  },1000)
} 

// \/ Funzione che riavvia il timer
function resetTimer() {  
  //Fa ripartire la funzione con innerText identici
  timerLimit = 30    //Impostare a 30/60
  spanTimer.innerHTML = timerLimit--
  timerText1.innerText = "SECONDS"
  timerText2.innerText = "REMAINING"
  animation.classList.remove("animate")
  // timer()
  // console.log("timer nel reset timer");
}

randomQuestInd()
assignQuestionsandAnswers()
/* timer()  *///Avvia timer al caricamento della pagina */

