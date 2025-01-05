import React, { useState } from "react";
import "../../../root/QuizFormat.scss";
import { auth, db } from '../../../firebase';  
import { ref, push } from 'firebase/database';
const manMadeDisastersQuiz = [
    // Multiple Choice
    {
      question: "What is the most common cause of chemical spills in industrial settings?",
      type: "multipleChoice",
      options: ["Improper storage of chemicals", "Natural disasters", "Equipment failure", "Lack of training"],
      answer: "C",
    },
    {
      question: "Which of the following is a major environmental impact of deforestation?",
      type: "multipleChoice",
      options: [
        "Increased biodiversity",
        "Higher oxygen production",
        "Loss of habitat for wildlife",
        "More rainfall",
      ],
      answer: "C",
    },
    {
      question: "What is the primary cause of industrial explosions?",
      type: "multipleChoice",
      options: ["Lack of safety measures", "Chemical reactions", "Human error", "All of the above"],
      answer: "D",
    },
    {
      question: "Which country experienced one of the worst nuclear accidents in 1986, involving the Chernobyl disaster?",
      type: "multipleChoice",
      options: ["Russia", "Ukraine", "Japan", "United States"],
      answer: "B",
    },
    {
      question: "What is a significant consequence of oil spills in the ocean?",
      type: "multipleChoice",
      options: [
        "Increased fish populations",
        "Harm to marine life and ecosystems",
        "Improvement in water quality",
        "Reduction in plastic waste",
      ],
      answer: "B",
    },
  
    // True or False
    {
      question: "Chemical spills can lead to contamination of soil, water, and air, affecting both the environment and human health.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "Deforestation has no significant impact on the global climate change process.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question: "Industrial explosions often result from poor maintenance or failure to follow safety protocols.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "Oil spills primarily affect freshwater bodies, not the ocean.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "False",
    },
  
    // Fill in the Blank
    {
      question: "_________ occurs when radioactive materials are released into the environment, often due to reactor malfunctions or disasters.",
      type: "identification",
      answer: "Nuclear contamination",
    },
    {
      question: "A ________ is a deliberate, violent act meant to harm people or disrupt societies, often targeting infrastructure.",
      type: "identification",
      answer: "Terrorist attack",
    },
  
    // Identification
    {
      question: "What term describes the harmful release of toxic chemicals into the environment, usually caused by human error or negligence?",
      type: "identification",
      answer: "Chemical spill",
    },
    {
      question: "What is the term for the large-scale release of radioactive materials following an accident at a nuclear power plant?",
      type: "identification",
      answer: "Nuclear accident",
    },
    
    // Case Study
    {
      question:
        "In 2010, an oil rig explosion in the Gulf of Mexico led to one of the largest environmental disasters in history. What was the main cause of the explosion?",
      type: "multipleChoice",
      options: [
        "Mechanical failure",
        "Human error",
        "Over-pressurization of well",
        "All of the above",
      ],
      answer: "D",
    },
    {
      question:
        "The 2001 terrorist attacks in the United States targeted significant landmarks. What impact did the attacks have on U.S. infrastructure?",
      type: "multipleChoice",
      options: [
        "Complete destruction of all communication systems",
        "Long-lasting economic impacts and security policy changes",
        "Recovery within a few days",
        "Minimal disruption to public services",
      ],
      answer: "B",
    },
    {
      question:
        "In 2011, the Fukushima Daiichi nuclear disaster in Japan resulted from a tsunami that damaged the plant. What was one of the long-term effects of the disaster?",
      type: "multipleChoice",
      options: [
        "Increase in local agricultural production",
        "Massive displacement of communities due to radiation contamination",
        "Boost in tourism to the region",
        "No significant effects on public health",
      ],
      answer: "B",
    },
  ];
  
  
const ManMadeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    const current = manMadeDisastersQuiz[currentQuestion];
    const correctAnswer = current.answer;

    if (current.type === "multipleChoice" || current.type === "trueFalse") {
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      }
      setUserAnswers((prev) => [
        ...prev,
        {
          question: current.question,
          userAnswer: selectedOption,
          correctAnswer,
        },
      ]);
    } else if (current.type === "identification") {
      if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        setScore(score + 1);
      }
      setUserAnswers((prev) => [
        ...prev,
        { question: current.question, userAnswer: userInput, correctAnswer },
      ]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < manMadeDisastersQuiz.length) {
      setCurrentQuestion(nextQuestion);
      setUserInput("");
    } else {
      setShowScore(true);

      handleQuizCompletion();  
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setUserInput("");
  };
  const handleQuizCompletion = () => {
    saveScoreToFirebase();
  };
  

  const saveScoreToFirebase = () => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      const timestamp = new Date().toISOString();
  
      const quizResultsRef = ref(db, `quizResults/manmade`);
  
      push(quizResultsRef, {
        userEmail: userEmail,
        score: score,
        timestamp: timestamp,
      })
        .then(() => {
          console.log('Score saved to Firebase with autogenerated ID');
        })
        .catch((error) => {
          console.error('Error saving score to Firebase:', error);
        });
    } else {
      console.log('User is not authenticated');
    }
  };
  

  return (
    <div className="fire-quiz-container">
      {showScore ? (
        <div className="score-section">
          <div className="score-summary">
            You scored {score} out of {manMadeDisastersQuiz.length}
          </div>

          <div className="answer-review">
            <h3>Correct Answers:</h3>
            {userAnswers.map((answer, index) => (
              <div
                key={index}
                className={`answer-card ${
                  answer.userAnswer === answer.correctAnswer
                    ? "correct"
                    : "incorrect"
                }`}
              >
                <p className="question">{answer.question}</p>
                <p className="answer">
                  Your Answer: <span>{answer.userAnswer}</span>
                </p>
                <p className="answer">
                  Correct Answer: <span>{answer.correctAnswer}</span>
                </p>
              </div>
            ))}
          </div>

          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Fire Safety Quiz</h2>
          <p>
            Question {currentQuestion + 1} / {manMadeDisastersQuiz.length}
          </p>
          <h3>{manMadeDisastersQuiz[currentQuestion].question}</h3>
          <div className="gap">
            {manMadeDisastersQuiz[currentQuestion].type === "identification" && (
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Your answer"
                className="identification-input"
              />
            )}
          </div>
          {manMadeDisastersQuiz[currentQuestion].type !== "identification" && (
            <div className="gap"></div>
          )}
          {manMadeDisastersQuiz[currentQuestion].type === "multipleChoice" && (
            <div className="options-section">
              {manMadeDisastersQuiz[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {manMadeDisastersQuiz[currentQuestion].type === "trueFalse" && (
            <div className="options-section">
              {manMadeDisastersQuiz[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {manMadeDisastersQuiz[currentQuestion].type === "identification" && (
            <button
              onClick={() => handleAnswerOptionClick(userInput)}
              className="option-button-identification"
            >
              Submit Answer
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ManMadeQuiz;