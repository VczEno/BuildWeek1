function examResult () {
    let textArea= document.querySelector('.circle-text')
    let p1= document.createElement('p')
    let p2= document.createElement('p')
    p2.className= 'blue-text'
    let p3= document.createElement('p')
    p3.setAttribute('id','certificate')
    textArea.appendChild(p1)
    textArea.appendChild(p2)
    textArea.appendChild(p3)
    let correctAnswers= 75
    if(correctAnswers >= 60) {
        p1.innerText=' Congratulations!'
        p2.innerText='You passed the exam.'
        p3.innerText='We\'ll send you the certificate in few minutes. Check your email (including promotions / spam folder)'
        
    } else {
        p1.innerText='Bad news Fella'
        p2.innerText='You didn\' pass the exam.'
        p2.className= 'pink-text'
        p3.innerText='You should get your ass out the class, you\'re embarassing bro...you make your mama cry'
    }
}
examResult()
