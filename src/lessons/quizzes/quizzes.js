import React, { useState, useEffect } from 'react';
import './style.css';

const Quizzes = () => {
  const quizData = [
    {
      question: "Which of the following is not a keyword in java??",
      options: ["Static", "Boolean", "Void", "Private"],
      correct: "Boolean",
    },
    {
      question: "Is an empty .java file a valid source file?'?",
      options: ["True", "False"],
      correct: "True",
    },
    {
      question: "Can a top-level class be private or protected?",
      options: ["True", "False"],
      correct: "False",
    },
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [timerInterval, setTimerInterval] = useState(null);

  const startQuiz = () => {
    setShowQuiz(true);
  };

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const resetLocalStorage = () => {
    for (let i = 0; i < quizData.length; i++) {
      localStorage.removeItem(`userAnswer_${i}`);
    }
  };

  const checkAnswer = (userAnswer) => {
    if (userAnswer === quizData[questionNumber].correct) {
      setScore(score + 1);
    }

    localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);

    const allOptions = document.querySelectorAll(".quiz-container .option");
    allOptions.forEach((o) => {
      o.classList.add("disabled");
    });
  };

  const createQuestion = () => {
    clearInterval(timerInterval);

    setSecondsLeft(20);

    const timerDisplay = document.querySelector(".quiz-container .timer");
    timerDisplay.classList.remove("danger");

    timerDisplay.textContent = `Time Left: 20 seconds`;

    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);

      if (secondsLeft < 3) {
        timerDisplay.classList.add("danger");
      }

      if (secondsLeft < 0) {
        clearInterval(interval);
        displayNextQuestion();
      }
    }, 1000);

    setTimerInterval(interval);
  };

  const displayNextQuestion = () => {
    if (questionNumber >= quizData.length - 1) {
      displayQuizResult();
      return;
    }

    setQuestionNumber(questionNumber + 1);
    createQuestion();
  };

  const displayQuizResult = () => {
    const quizResult = document.querySelector(".quiz-result");
    quizResult.style.display = "flex";

    quizResult.innerHTML = `<h2>You have scored ${score} out of ${quizData.length}.</h2>`;

    for (let i = 0; i < quizData.length; i++) {
      const userAnswer = localStorage.getItem(`userAnswer_${i}`);
      const correctAnswer = quizData[i].correct;
      const answeredCorrectly = userAnswer === correctAnswer;

      const resultItem = document.createElement("div");
      resultItem.classList.add("question-container");

      if (!answeredCorrectly) {
        resultItem.classList.add("incorrect");
      }

      resultItem.innerHTML = `<div class="question">Question ${
        i + 1
      }: ${quizData[i].question}</div>
      <div class="user-answer">Your answer: ${
        userAnswer || "Not Answered"
      }</div>
      <div class="correct-answer">Correct answer: ${correctAnswer}</div>`;

      quizResult.appendChild(resultItem);
    }
  };

  useEffect(() => {
    resetLocalStorage();
    shuffleArray(quizData);
  }, []);

  return (
    <div>
      {!showQuiz ? (
        <div className="start-btn-container">
          <h2>TOPIC 1: JAVA SYNTAX</h2>
          <p>Test your knowledge across various categories</p>
          <button className="start-btn" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-container">
          <h1>TOPIC 1: JAVA SYNTAX</h1>
          <div className="timer">Time left: {secondsLeft} seconds</div>
          <h2 className="question"></h2>
          <div className="options"></div>
          <button className="next-btn">Next</button>
        </div>
      )}
      <div className="quiz-result"></div>
    </div>
  );
};

export default Quizzes;
