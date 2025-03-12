import React, { useState, useEffect } from "react";
import "./App.css";
import CollegeLogo from "./assets/tec_nav_logo_2.20461983.png";
const questions = [
  {
    question: "Which scheduling algorithm is non-preemptive?",
    options: ["Round Robin", "Shortest Job Next (SJN)", "Priority Scheduling", "Multilevel Queue"],
    answer: 1
  },
  {
    question: "Which of the following is responsible for memory management in an operating system?",
    options: ["Scheduler", "Dispatcher", "Memory Manager", "File System"],
    answer: 2
  },
  {
    question: "In a paging system, what does the ‘page table’ store?",
    options: ["Page sizes", "Mapping of virtual addresses to physical addresses", "I/O device mappings", "Kernel instructions"],
    answer: 1
  },
  {
    question: "Which system call is used to create a new process in Unix/Linux systems?",
    options: ["fork()", "exec()", "spawn()", "create()"],
    answer: 0
  },
  {
    question: "What is the primary purpose of a semaphore in an operating system?",
    options: ["To manage memory allocation", "To manage file storage", "To synchronize processes and avoid race conditions", "To handle user permissions"],
    answer: 2
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes timer

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswer = (index) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (selectedOptions[currentQuestion] !== undefined) {
      if (selectedOptions[currentQuestion] === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="App-container">
      <nav className="navbar">
        <img src={CollegeLogo} alt="College Logo" className="logo" />
        <h1>College App Competition</h1>
        <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      </nav>
      {showResult ? (
        <div className="result">
          <h2>App Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div className="App-box">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={selectedOptions[currentQuestion] === index ? "selected" : ""}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button className="prev-btn" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button className="next-btn" onClick={handleNext} disabled={selectedOptions[currentQuestion] === undefined}>
              {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
