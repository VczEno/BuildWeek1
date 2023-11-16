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
        console.log(secondi);                     
    }          
}, 1000);                                 //Intervallo espresso in ms 1000ms = 1s