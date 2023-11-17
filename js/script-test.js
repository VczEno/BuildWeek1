// TIMER, ANNA  //  //INSERITO TUTTO IL TIMER IN UNA FUNZIONE

function timer() {
  let timerLimit = 30;
  let spanTimer = document.querySelector("#timer_number"); //queryselector da definire
  let secondi = timerLimit; 

  let timerText1 = document.querySelector(".timer_text1")
  let timerText2 = document.querySelector(".timer_text2")
  let insideCircle = document.querySelector(".inside_circle")

  let timerInterval = setInterval(() => {   //Applico la function setInterval che "fa cose per ogni intervallo (vedi ultimo rigo)"
    if (secondi === 0) {                  
        clearInterval(timerInterval);     //se secondi è zero fermati, altrimenti leeeesgooo 
        insideCircle.innerHTML = "&nbsp" 
    } else {                           
        spanTimer.innerText = secondi--;       // = non += pd perchè il + concatena   //itera all'indietro da 31 secondi (timerLimit)
        
        timerText1.innerText = "SECONDS"
        timerText2.innerText = "REMAINING"                     
    }          
}, 1000);                                 //Intervallo espresso in ms 1000ms = 1s
}
timer()


// ITERAZIONE DOMANDE , FELIPE 
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
let currentQuestionIndex = 1; // incrementare quando finisca la domanda */  //ERA CONST E DICEVA CHE NON POTEVA ESSERE GIUSTAMENTE MODIFICATA


const assignQuestionsandAnswers = () =>{  //RIMOSSO IL PARAMETRO CHE JE DAVA FASTIDIO
    questionElement.textContent = questions[currentQuestionIndex].question;     //question assignment in "question" h2
    const tutteRisposte = [questions[currentQuestionIndex].correct_answer, ...questions[currentQuestionIndex].incorrect_answers,]; //every answer together
    const tutteRisposteSort = tutteRisposte.sort(() => Math.random() - 0.5);    //randomize the answers così la prima non è sempre la corretta

    labels.forEach((label, index) => {      //risposte assignment in all labels
        label.textContent = tutteRisposteSort[index];
        label.addEventListener('click', selectedAnswer);  //AGGIUNTO EVENT LISTENER DI INPUT SELECTION DIRETTAMENTE QUI , altrimenti non trovava le etichette 
    });

    if (tutteRisposte.length === 2){

        labels[2].style.display = "none"; 
        labels[3].style.display = "none";  //hides the last two labels when there's only 2 answers
    } 

    if(questionElement.textContent.length > 30){
        questionElement.style.fontSize = "2.4em";
    }
                                         
}
assignQuestionsandAnswers(questions);


function shuffle() {
  questions.sort(() => Math.round(Math.random() * 10));
} 

/* function inputSelection() {
  let choices = document.querySelectorAll("label")  //Selettore selezionava elemento sbagliato
  console.log(choices);
  for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selectedAnswer);
  }
} 
inputSelection()
 */

function selectedAnswer() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    shuffle();
    assignQuestionsandAnswers();
  } else {
      location.href = "results.html", true;  //FIXATO. Con window dava errore. con location funzia 
  }
} 
shuffle();
assignQuestionsandAnswers(); 
 


