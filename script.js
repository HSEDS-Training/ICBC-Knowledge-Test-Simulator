const totalQuestions = questions.length;

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = [];
let skippedQuestions = [];
let submitButton;
let skipButton;

function displayQuestion() {
  if (currentQuestionIndex >= totalQuestions && skippedQuestions.length > 0) {
    currentQuestionIndex = skippedQuestions.shift();
  }

  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
    optionsList.appendChild(li);
  });

  if (question.image) {
    const imageElement = document.createElement('img');
    imageElement.src = question.image;
    imageElement.alt = "Question Image";
    document.getElementById("question").appendChild(imageElement);
  }

  const sourceElement = document.getElementById("source");
  sourceElement.innerHTML = ""; // Clear the source element

  const linkElement = document.getElementById("link");
  linkElement.innerHTML = ""; // Clear the link element

  if (!submitButton) {
    submitButton = createButton("Submit", checkAnswer);
    document.getElementById("button-container").appendChild(submitButton);
  } else {
    submitButton.style.display = "inline"; // Corrected from "in-line" to "inline"
  }

  if (!skipButton) {
    skipButton = createButton("Skip", skipQuestion);
    document.getElementById("button-container").appendChild(skipButton);
  } else {
    skipButton.textContent = "Skip";
  }

  updateProgressBar();
  updateIncorrectCounter();
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function skipQuestion() {
  skippedQuestions.push(currentQuestionIndex);
  currentQuestionIndex++;
  displayQuestion();
}

function checkAnswer() {
  const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
  const question = questions[currentQuestionIndex];

  if (selectedAnswer === question.correctAnswer) {
    correctAnswers++;
  } else {
    incorrectAnswers.push(question);
  }

  highlightAnswers(question.correctAnswer, selectedAnswer);
  displaySource(question.source, question.link);
  currentQuestionIndex++;

  const thresholdCorrect = totalQuestions * 0.8;
  const maxIncorrect = totalQuestions * 0.2;

  if (correctAnswers >= thresholdCorrect || (currentQuestionIndex >= totalQuestions && skippedQuestions.length === 0)) {
    endQuiz();
  } else if (incorrectAnswers.length > maxIncorrect) {
    endQuiz();
  } else {
    submitButton.style.display = "none";
    skipButton.textContent = "Next";
  }

  updateProgressBar();
  updateIncorrectCounter();
}

function highlightAnswers(correctAnswer, selectedAnswer) {
  const optionsList = document.getElementById("options").children;
  for (let i = 0; i < optionsList.length; i++) {
    if (i === correctAnswer) {
      optionsList[i].classList.add("correct");
    } else if (i === selectedAnswer) {
      optionsList[i].classList.add("incorrect");
    }
  }
}

function displaySource(source, link) {
  const sourceElement = document.getElementById("source");
  const linkElement = document.getElementById("link");
  sourceElement.innerHTML = `Source: ${source}`;
  linkElement.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}

function updateProgressBar() {
  const totalAnswered = correctAnswers + incorrectAnswers.length;
  const progressPercentage = (totalAnswered / totalQuestions) * 100;
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.textContent = `${totalAnswered} / ${totalQuestions}`;
  progressBar.style.backgroundColor = '#007bff';
  progressBar.style.display = 'flex';
  progressBar.style.justifyContent = 'center';
  progressBar.style.alignItems = 'center';
}

function updateIncorrectCounter() {
  const maxIncorrect = totalQuestions * 0.2;
  const incorrectCounter = document.getElementById("incorrect-counter");

  if (incorrectAnswers.length > maxIncorrect) {
    incorrectCounter.innerHTML = `${correctAnswers} correct out of ${totalQuestions}. Your score is ${(correctAnswers / totalQuestions * 100).toFixed(2)}%.`;
  } else {
    incorrectCounter.innerHTML = `<span class="${incorrectAnswers.length > 0 ? 'red-text' : ''}">${incorrectAnswers.length}</span> of ${maxIncorrect} (${maxIncorrect - incorrectAnswers.length} remaining)`;
  }
}

function endQuiz() {
  const thresholdCorrect = totalQuestions * 0.8;
  let totalAnswered = correctAnswers + incorrectAnswers.length;
  let percentage;
  let resultMessage;

  if (correctAnswers >= thresholdCorrect) {
    resultMessage = "You Passed!";
    percentage = (correctAnswers / totalAnswered) * 100;
    updateProgressBarBasedOnTotalAnswered(totalAnswered);
  } else if (incorrectAnswers.length > totalQuestions * 0.2) {
    resultMessage = "You Failed.";
    totalAnswered = totalQuestions;
    percentage = (correctAnswers / totalQuestions) * 100;
  } else {
    resultMessage = "Quiz Completed.";
    percentage = (correctAnswers / totalAnswered) * 100;
  }

  document.getElementById("question").textContent = `${resultMessage} You got ${correctAnswers} correct out of ${totalAnswered} questions. Your score is ${percentage.toFixed(2)}%.`;
  document.getElementById("viewIncorrectAnswers").textContent = 'View Incorrect Answers';
  document.getElementById("options").style.display = "none";
  document.getElementById("source").style.display = "none";
  document.getElementById("link").style.display = "none";
  submitButton.style.display = "none";
  skipButton.style.display = "none";
  updateIncorrectCounter();
}

function updateProgressBarBasedOnTotalAnswered(totalAnswered) {
  const progressPercentage = (totalAnswered / totalQuestions) * 100;
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.textContent = `${totalAnswered} / ${totalQuestions}`;
  progressBar.style.backgroundColor = 'green';
}

function viewIncorrectAnswers() {
  const newWindow = window.open('', '_blank');
  newWindow.document.write('<html><head><title>Incorrect Answers</title></head><body>');
  incorrectAnswers.forEach(answer => {
    newWindow.document.write(`<h2>${answer.question}</h2>`);
    newWindow.document.write(`<p>Source: ${answer.source}</p>`);
    newWindow.document.write(`<p><a href="${answer.link}" target="_blank">${answer.link}</a></p>`);
  });
  newWindow.document.write('</body></html>');
  newWindow.document.close();
}

document.getElementById('viewIncorrectAnswers').addEventListener('click', viewIncorrectAnswers);

displayQuestion();
