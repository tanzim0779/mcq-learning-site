const questions = [
  { q: "Who is the creator of the website?", options: ["Rahim", "Tanzim", "ΛΥΛΠ", "Nayem vai"], answer: 1, explanation: "TANZIM" },
  { q: "What is the dream of Tanzim?", options: ["SUST", "IUT", "BUET", "GSTU"], answer: 1, explanation: " Inshallah IUT" },
  { q: "Will Tanzim be successful in his life?", options: ["Yes", "NO", " You predict", "Inshallah"], answer: 3, explanation: "only Allah ke this question" },
  
];

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const confirmDialog = document.getElementById("confirm-dialog");

let currentIndex = 0;
let answers = [];
let secondsLeft = 600;
let timerInterval = null;
let finished = false;

const bengaliDigits = value => String(value).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[Number(d)]);
const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

document.getElementById("year").textContent = new Date().getFullYear();

function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen].forEach(item => item.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentIndex = 0;
  answers = Array(questions.length).fill(null);
  secondsLeft = 600;
  finished = false;
  showScreen(quizScreen);
  renderQuestion();
  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft -= 1;
    updateTimer();
    if (secondsLeft <= 0) finishQuiz(true);
  }, 1000);
}

function updateTimer() {
  const timer = document.getElementById("timer");
  const box = timer.closest(".timer-box");
  timer.textContent = formatTime(Math.max(0, secondsLeft));
  box.classList.toggle("warning", secondsLeft <= 60);
}

function renderQuestion() {
  const question = questions[currentIndex];
  document.getElementById("question-count").textContent = `প্রশ্ন ${bengaliDigits(currentIndex + 1)} / ${bengaliDigits(questions.length)}`;
  document.getElementById("answered-count").textContent = `উত্তর দিয়েছ ${bengaliDigits(answers.filter(a => a !== null).length)}টি`;
  document.getElementById("question-text").textContent = question.q;
  document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === questions.length - 1 ? "শেষ প্রশ্ন ✓" : "পরের প্রশ্ন →";

  const options = document.getElementById("options");
  options.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-btn${answers[currentIndex] === index ? " selected" : ""}`;
    button.setAttribute("aria-pressed", answers[currentIndex] === index ? "true" : "false");
    const key = document.createElement("span");
    key.className = "option-key";
    key.textContent = "ABCD"[index];
    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = option;
    button.append(key, label);
    if (answers[currentIndex] === index) {
      const tick = document.createElement("span");
      tick.className = "option-tick";
      tick.textContent = "✓";
      button.append(tick);
    }
    button.addEventListener("click", () => {
      if (finished) return;
      answers[currentIndex] = index;
      renderQuestion();
    });
    options.append(button);
  });
  renderQuestionDots();
}

function renderQuestionDots() {
  const dots = document.getElementById("question-dots");
  dots.replaceChildren();
  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-dot";
    if (answers[index] !== null) button.classList.add("answered");
    if (index === currentIndex) button.classList.add("current");
    button.textContent = bengaliDigits(index + 1);
    button.setAttribute("aria-label", `প্রশ্ন ${index + 1}`);
    button.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
    });
    dots.append(button);
  });
}

function requestSubmit() {
  const unanswered = answers.filter(answer => answer === null).length;
  document.getElementById("confirm-text").textContent = unanswered
    ? `তুমি ${bengaliDigits(unanswered)}টি প্রশ্নের উত্তর দাওনি। তবুও কি পরীক্ষা জমা দিতে চাও?`
    : "সব প্রশ্নের উত্তর দিয়েছ। এখন ফলাফল দেখতে পরীক্ষা জমা দাও।";
  confirmDialog.showModal();
}

function finishQuiz(autoSubmitted = false) {
  if (finished) return;
  finished = true;
  clearInterval(timerInterval);
  if (confirmDialog.open) confirmDialog.close();
  const correct = answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
  const wrong = answers.reduce((total, answer, index) => total + (answer !== null && answer !== questions[index].answer ? 1 : 0), 0);
  const blank = answers.filter(answer => answer === null).length;
  const percent = Math.round((correct / questions.length) * 100);

  document.getElementById("score-percent").textContent = `${bengaliDigits(percent)}%`;
  document.getElementById("correct-count").textContent = bengaliDigits(correct);
  document.getElementById("wrong-count").textContent = bengaliDigits(wrong);
  document.getElementById("blank-count").textContent = bengaliDigits(blank);
  document.getElementById("result-title").textContent = percent >= 80 ? "দারুণ করেছ!" : percent >= 50 ? "ভালো চেষ্টা!" : "চেষ্টা চালিয়ে যাও!";
  document.getElementById("result-message").textContent = autoSubmitted
    ? "সময় শেষ হয়েছে—তোমার উত্তর অনুযায়ী ফলাফল তৈরি করা হয়েছে।"
    : "তোমার ফলাফল নিচে দেওয়া হলো। ভুলগুলো দেখে শিখে নাও।";
  document.getElementById("review-total").textContent = `${bengaliDigits(questions.length)}টি প্রশ্ন`;
  renderReview();
  showScreen(resultScreen);
}

function renderReview() {
  const review = document.getElementById("answer-review");
  review.replaceChildren();
  questions.forEach((question, index) => {
    const chosen = answers[index];
    const isCorrect = chosen === question.answer;
    const isBlank = chosen === null;
    const item = document.createElement("article");
    item.className = "review-item";
    const head = document.createElement("div");
    head.className = "review-item-head";
    const status = document.createElement("span");
    status.className = `review-status ${isCorrect ? "correct" : isBlank ? "blank" : "wrong"}`;
    status.textContent = isCorrect ? "✓" : isBlank ? "—" : "×";
    const questionText = document.createElement("p");
    questionText.className = "review-question";
    questionText.textContent = `${bengaliDigits(index + 1)}. ${question.q}`;
    head.append(status, questionText);
    item.append(head);

    const userAnswer = document.createElement("p");
    userAnswer.className = "review-answer";
    if (isBlank) {
      userAnswer.textContent = "তোমার উত্তর: দেওয়া হয়নি";
    } else {
      userAnswer.textContent = `তোমার উত্তর: ${question.options[chosen]}`;
      if (!isCorrect) userAnswer.classList.add("wrong-text");
    }
    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer";
    const label = document.createElement("b");
    label.textContent = `সঠিক উত্তর: ${question.options[question.answer]}`;
    correctAnswer.append(label);
    const explanation = document.createElement("p");
    explanation.className = "review-answer";
    explanation.textContent = question.explanation;
    item.append(userAnswer, correctAnswer, explanation);
    review.append(item);
  });
}

startBtn.addEventListener("click", startQuiz);
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) { currentIndex -= 1; renderQuestion(); }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) { currentIndex += 1; renderQuestion(); }
  else requestSubmit();
});
submitBtn.addEventListener("click", requestSubmit);
document.getElementById("cancel-submit").addEventListener("click", () => confirmDialog.close());
document.getElementById("confirm-submit").addEventListener("click", () => finishQuiz(false));
restartBtn.addEventListener("click", startQuiz);
homeBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  finished = true;
  showScreen(homeScreen);
});
