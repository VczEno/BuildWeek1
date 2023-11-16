
let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const labels = document.querySelectorAll("#options .answer");

function assignQuestionsandAnswers() {
  questionElement.textContent = questions[currentQuestionIndex].question;
  const tutteRisposte = [
    questions[currentQuestionIndex].correct_answer,
    ...questions[currentQuestionIndex].incorrect_answers,
  ];

  labels.forEach((label, index) => {
    label.textContent = tutteRisposte[index];
  });
}



function shuffle() {
  questions.sort(() => Math.round(Math.random() * 10));
}

function inputSelection() {
  const choices = document.getElementsByClassName("answer");

  for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selectedAnswer);
  }
}

function selectedAnswer() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    shuffle();
    assignQuestionsandAnswers();
  } else {
    window.location.href = "/results.html";
  }
}

shuffle();
assignQuestionsandAnswers();
inputSelection();
