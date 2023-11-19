
// \/ FUNZIONE TIMER \/ 
// Variabili globali perchè servono sia nel timer chee nel reset timer 
let timerLimit = 31;     //Impostare a 30/60
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
      console.log("reset timer nel timer");     
      } else {   // domande finite, link ai risultati
        sessionStorage.setItem("risposte esatte", correctAnswersCounter)
        questionN.innerHTML = ''
        location.href = "results.html", true;  //FIXATO. Con window dava errore. con location funzia 
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
  animation.classList.toggle("animate")
  timer()
  // console.log("timer nel reset timer");
}