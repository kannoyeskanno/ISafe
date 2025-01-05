import React, { useState } from "react";
import "../../../root/QuizFormat.scss";
import { auth, db } from '../../../firebase';  
import { ref, push } from 'firebase/database';

const electricalSafetyQuiz = [
    // Multiple Choice
    {
      question: "What is the most common cause of electrical shocks?",
      type: "multipleChoice",
      options: ["Faulty wiring", "Overloaded circuits", "Contact with live wires", "Short circuits"],
      answer: "C",
    },
    {
      question: "Which of the following is a common symptom of electrical shock?",
      type: "multipleChoice",
      options: ["Temporary paralysis", "Muscle spasms or cramps", "Sudden vision loss", "Severe headaches"],
      answer: "B",
    },
    {
      question: "Which of these actions could prevent electrical shock hazards in a household?",
      type: "multipleChoice",
      options: [
        "Installing ground fault circuit interrupters (GFCIs)",
        "Using outdated extension cords",
        "Overloading electrical outlets",
        "Placing appliances near water sources",
      ],
      answer: "A",
    },
    {
      question: "What is a potential risk of overloading an electrical circuit?",
      type: "multipleChoice",
      options: [
        "Reduced energy consumption",
        "Overheating, potentially causing fires",
        "Improved circuit efficiency",
        "Complete power shutdown",
      ],
      answer: "B",
    },
    {
      question: "What is the best way to prevent lightning strikes from damaging buildings?",
      type: "multipleChoice",
      options: [
        "Installing a lightning rod",
        "Using only battery-powered devices",
        "Connecting all appliances to the ground",
        "Keeping windows open during thunderstorms",
      ],
      answer: "A",
    },
  
    // True or False
    {
      question: "Electrical shocks can cause severe injuries, including burns, organ damage, and even death.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "A short circuit is usually caused by a broken wire or exposed wires touching each other.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "Overloading occurs when too many devices are connected to a single electrical outlet or circuit.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "Faulty wiring should be ignored if it doesn’t immediately affect the operation of electrical devices.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "False",
    },
  
    // Fill in the Blank
    {
      question: "A ________ occurs when the current flows along an unintended path, often resulting in fire or damage to equipment.",
      type: "identification",
      answer: "Short circuit",
    },
    {
      question: "When a wire insulation is damaged or frayed, it can result in ________ that may lead to fire hazards or electrical shocks.",
      type: "identification",
      answer: "Faulty wiring",
    },
  
    // Identification
    {
      question: "What is the term for a situation where electrical demand exceeds the capacity of a circuit, potentially leading to overheating and fires?",
      type: "identification",
      answer: "Overloading",
    },
  
    // Case Study
    {
      question:
        "In 2020, a house caught fire after a faulty electrical wire sparked a short circuit. The fire spread quickly due to the lack of smoke detectors. What should have been done to prevent this accident?",
      type: "multipleChoice",
      options: [
        "Install smoke detectors in all rooms",
        "Use only high-voltage appliances",
        "Avoid using electrical equipment during storms",
        "Overload electrical outlets to ensure all appliances can be used at once",
      ],
      answer: "A",
    },
    {
      question:
        "During a thunderstorm in 2021, a lightning strike caused a fire in a home. The lightning struck the building’s roof and spread quickly, as the house did not have a lightning rod. What could have helped prevent this?",
      type: "multipleChoice",
      options: [
        "The installation of a lightning rod",
        "Disconnecting all electronic devices",
        "Using larger appliances to conduct the strike",
        "Placing all appliances outside",
      ],
      answer: "A",
    },
    {
      question:
        "In 2018, a homeowner was shocked while plugging in an appliance due to a faulty wire. The wire was exposed, and the individual made contact with the live wire. What is the most appropriate safety measure to prevent such accidents?",
      type: "multipleChoice",
      options: [
        "Regular inspection of electrical systems for wear and tear",
        "Overloading circuits for more power",
        "Using non-insulated wiring for better conduction",
        "Avoiding the use of electrical devices near water",
      ],
      answer: "A",
    },
  ];
  
const ElectricalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    const current = electricalSafetyQuiz[currentQuestion];
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
    if (nextQuestion < electricalSafetyQuiz.length) {
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
  
      const quizResultsRef = ref(db, `quizResults/electrical`);
  
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
            You scored {score} out of {electricalSafetyQuiz.length}
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
            Question {currentQuestion + 1} / {electricalSafetyQuiz.length}
          </p>
          <h3>{electricalSafetyQuiz[currentQuestion].question}</h3>
          <div className="gap">
            {electricalSafetyQuiz[currentQuestion].type === "identification" && (
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Your answer"
                className="identification-input"
              />
            )}
          </div>
          {electricalSafetyQuiz[currentQuestion].type !== "identification" && (
            <div className="gap"></div>
          )}
          {electricalSafetyQuiz[currentQuestion].type === "multipleChoice" && (
            <div className="options-section">
              {electricalSafetyQuiz[currentQuestion].options.map((option, index) => (
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
          {electricalSafetyQuiz[currentQuestion].type === "trueFalse" && (
            <div className="options-section">
              {electricalSafetyQuiz[currentQuestion].options.map((option, index) => (
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
          {electricalSafetyQuiz[currentQuestion].type === "identification" && (
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

export default ElectricalQuiz;