// Sample Quiz Data
const quizData = {
  question: "What is the speed of light in a vacuum?",
  options: [
    "300,000 km/s",
    "150,000 km/s",
    "1,000,000 km/s",
    "30,000 km/s"
  ],
  correct: 0
};

function loadQuiz() {
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');

  questionEl.textContent = quizData.question;
  optionsEl.innerHTML = '';

  quizData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const resultEl = document.getElementById('result');
  if (selectedIndex === quizData.correct) {
    resultEl.textContent = "✅ Correct! Light travels at approximately 300,000 km per second.";
    resultEl.style.color = "#4ade80";
  } else {
    resultEl.textContent = "❌ Not quite! Give it another try.";
    resultEl.style.color = "#f87171";
  }
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', loadQuiz);
