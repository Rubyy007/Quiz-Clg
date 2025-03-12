import React, { useState, useEffect } from "react";
import "./App.css";

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
  },
  {
    question: "Which of the following is NOT a valid CPU scheduling criterion?",
    options: ["Throughput", "Turnaround time", "Hard Disk Usage", "Response time"],
    answer: 2
  },
  {
    question: "Which page replacement algorithm results in the least number of page faults?",
    options: ["FIFO", "LRU", "Optimal", "Clock"],
    answer: 2
  },
  {
    question: "Which command is used to display the currently running processes in a Linux system?",
    options: ["ps", "top", "htop", "All of the above"],
    answer: 3
  },
  {
    question: "Which file system is commonly used in modern Linux distributions?",
    options: ["NTFS", "FAT32", "ext4", "HFS+"],
    answer: 2
  },
  {
    question: "Which of the following is true about deadlock prevention?",
    options: ["It requires holding multiple resources simultaneously", "It involves breaking the circular wait condition", "It guarantees minimal CPU usage", "It does not affect system throughput"],
    answer: 1
  },
  {
    question: "Which of the following is an unsupervised learning algorithm?",
    options: ["Decision Tree", "Random Forest", "K-Means Clustering", "Logistic Regression"],
    answer: 2
  },
  {
    question: "Which metric is commonly used to evaluate a classification model’s performance?",
    options: ["Mean Squared Error", "R-squared", "Accuracy", "Silhouette Score"],
    answer: 2
  },
  {
    question: "In a dataset with severe class imbalance, which evaluation metric is more appropriate?",
    options: ["Precision", "Recall", "F1 Score", "Mean Absolute Error"],
    answer: 2
  },
  {
    question: "Which technique is used to reduce dimensionality in a dataset?",
    options: ["KNN", "PCA", "SVM", "Decision Tree"],
    answer: 1
  },
  {
    question: "What is the primary purpose of cross-validation in machine learning?",
    options: ["To improve model complexity", "To measure training time", "To ensure the model generalizes well to unseen data", "To reduce data size"],
    answer: 2
  },
  {
    question: "Which attack exploits a vulnerability in input validation to execute malicious code on a web server?",
    options: ["DDoS", "SQL Injection", "Phishing", "Brute Force Attack"],
    answer: 1
  },
  {
    question: "Which encryption algorithm is considered the most secure for modern data protection?",
    options: ["DES", "3DES", "AES", "SHA-1"],
    answer: 2
  },
  {
    question: "What is the primary purpose of a VPN (Virtual Private Network)?",
    options: ["To speed up internet connectivity", "To provide encrypted communication over unsecured networks", "To bypass firewalls", "To increase bandwidth"],
    answer: 1
  },
  {
    question: "Which of the following is an example of multi-factor authentication (MFA)?",
    options: ["Using a password only", "Fingerprint recognition only", "Password + Security Token + Face Recognition", "Username and password"],
    answer: 2
  },
  {
    question: "Which protocol is commonly used to establish secure remote access over a network?",
    options: ["HTTP", "FTP", "SSH", "Telnet"],
    answer: 2
  },
  {
    question: "Which of the following is a key characteristic of IoT devices?",
    options: ["Manual data processing", "Autonomous data exchange and communication", "Exclusive use of wired networks", "Operation without sensors"],
    answer: 1
  },
  {
    question: "Which protocol is widely used for lightweight communication in IoT systems?",
    options: ["HTTP", "MQTT", "FTP", "SMTP"],
    answer: 1
  },
  {
    question: "What is the primary role of an IoT gateway in an IoT architecture?",
    options: ["Data visualization", "Sensor calibration", "Bridging IoT devices with the cloud", "User interface management"],
    answer: 2
  },
  {
    question: "Which communication protocol is commonly used for IoT devices in low-power networks?",
    options: ["Zigbee", "Ethernet", "FTP", "SMTP"],
    answer: 0
  },
  {
    question: "Which of the following security concerns is most critical in IoT ecosystems?",
    options: ["SQL Injection", "Phishing attacks", "Device hijacking and data breaches", "DDoS attacks only"],
    answer: 2
  },
  {
    question: "What type of sensors are typically used in smart home IoT devices for motion detection?",
    options: ["Pressure sensors", "Infrared sensors", "Humidity sensors", "Gas sensors"],
    answer: 1
  },
  {
    question: "Which normal form ensures that no partial dependency exists in a relational database?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 1
  },
  {
    question: "Which SQL statement is used to remove duplicates from a result set?",
    options: ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT FILTER", "SELECT CLEAN"],
    answer: 1
  },
  {
    question: "In an ER model, what does a diamond symbol represent?",
    options: ["Attribute", "Entity", "Relationship", "Weak entity"],
    answer: 2
  },
  {
    question: "Which of the following commands is used to revoke user privileges in SQL?",
    options: ["REMOVE", "DELETE", "REVOKE", "DROP"],
    answer: 2
  },
  {
    question: "Which of the following indexing techniques is most efficient for searching large databases?",
    options: ["Hash Indexing", "Clustered Indexing", "B-tree Indexing", "Bitmap Indexing"],
    answer: 2
  },
  {
    question: "Which of the following constraints enforces a unique value for each row in a column?",
    options: ["NOT NULL", "UNIQUE", "CHECK", "PRIMARY KEY"],
    answer: 3
  },
  {
    question: "Which of the following is a wireless communication protocol used in short-range communication between devices?",
    options: ["NFC", "FTP", "DHCP", "TCP/IP"],
    answer: 0
  },
  {
    question: "Which technology enables mobile devices to connect to the internet over cellular networks?",
    options: ["Wi-Fi", "Bluetooth", "LTE", "Ethernet"],
    answer: 2
  },
  {
    question: "Which type of handoff occurs when a mobile device switches between two different network technologies?",
    options: ["Soft handoff", "Hard handoff", "Vertical handoff", "Horizontal handoff"],
    answer: 2
  }
]
;

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
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
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }
  };

  return (
    <div className="App-container">
      <nav className="navbar">
        <img src="college-logo.png" alt="College Logo" className="logo" />
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
                className={selectedOption === index ? "selected" : ""}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext} disabled={selectedOption === null}>
            {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
