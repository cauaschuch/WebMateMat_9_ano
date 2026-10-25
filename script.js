// Pergunta interativa sobre Ciência dos Materiais / Matemática
const quizData = {
  question: "Qual das seguintes propriedades mede a capacidade de um material resistir a ser riscado?",
  options: [
    "Dureza",
    "Tenacidade",
    "Elasticidade",
    "Dutilidade"
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
    resultEl.textContent = "✅ Correto! A Dureza mede a resistência ao risco (como na escala de Mohs).";
    resultEl.style.color = "#4ade80";
  } else {
    resultEl.textContent = "❌ Tente novamente!";
    resultEl.style.color = "#f87171";
  }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
