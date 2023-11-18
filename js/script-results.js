var correctAnswersCounter = sessionStorage.getItem("risposte esatte")

function examResult () {
    let correctScore= document.querySelectorAll('.left-box p')
    console.log(correctScore)
    correctScore[1].innerText=(correctAnswersCounter/10)*100 + '%'
    correctScore[2].innerText=correctAnswersCounter +'/10 questions'
    let wrongScore= document.querySelectorAll('.right-box p')
    console.log(wrongScore)
    wrongScore[1].innerText=((10-correctAnswersCounter)/10)*100 + '%'
    wrongScore[2].innerText=(10-correctAnswersCounter) +'/10 questions'
    let pieChart=document.querySelector('#pieChart')
    console.log(pieChart.innerHTML)
    pieChart.style=`--p:${(correctAnswersCounter/10)*100}`
   
    let textArea= document.querySelector('.circle-text')
    let p1= document.createElement('p')
    let p2= document.createElement('p')
    p2.className= 'blue-text'
    let p3= document.createElement('p')
    p3.setAttribute('id','certificate')
    textArea.appendChild(p1)
    textArea.appendChild(p2)
    textArea.appendChild(p3)
    if((correctAnswersCounter/10)*100 >= 60) {
        let passedSound=document.querySelector('#passed')
        setTimeout(startConfetti, 2000)
        setTimeout(passedSound.play(), 2000)
        setTimeout(toggleConfetti,7000);
        p1.innerText=' Congratulations!'
        p2.innerText='You passed the exam.'
        p3.innerText='We\'ll send you the certificate in few minutes. Check your email (including promotions / spam folder)'
        
    } else {
        let failedSound=document.querySelector('#failed')
        setTimeout(failedSound.play(), 2000)
        p1.innerText='Whoops...Try again'
        p2.innerText='You didn\'t pass the exam.'
        p2.className= 'pink-text'
        p3.innerText="You're not a machine like me, you're build up to fail. Don't worry, take your time to focus on your mistakes and the next time you will succeed"
    }
}

examResult()






//lisa, hover bottone
const button = document.getElementById('bottone');;

button.addEventListener('mouseover', () => {
    button.classList.add('hovered-button');
});

button.addEventListener('mouseout', () => {
  button.classList.remove('hovered-button');
});