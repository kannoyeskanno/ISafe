import React, { useState } from "react";
import "../../../root/QuizFormat.scss";
import { auth, db } from '../../../firebase';  
import { ref, push } from 'firebase/database';

const fireQuestions = [
  // Industrial Fires
  {
    question: "Which of the following is a common cause of industrial fires?",
    type: "multipleChoice",
    options: [
      "Electrical short circuits",
      "Faulty fuel injectors",
      "Overcooked food",
      "None of the above",
    ],
    answer: "A",
  },
  {
    question:
      "To prevent industrial fires, it’s essential to keep all _______ free from dust and debris.",
    type: "identification",
    answer: "electrical panels",
  },
  {
    question:
      "Industrial fires are rarely caused by improperly stored chemicals.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Which fire class typically applies to industrial fires involving flammable liquids?",
    type: "multipleChoice",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "B",
  },
  {
    question:
      "Training employees on proper fire response is a recommended measure for preventing industrial fires.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },

  // Electrical Fires
  {
    question:
      "Electrical fires can start when there is a ________ or an overloaded circuit.",
    type: "identification",
    answer: "short circuit",
  },
  {
    question:
      "Which device helps reduce the risk of electrical fires in homes?",
    type: "multipleChoice",
    options: [
      "Circuit breaker",
      "Stove timer",
      "Smoke detector",
      "Light dimmer",
    ],
    answer: "A",
  },
  {
    question:
      "Overloaded power strips can increase the risk of an electrical fire.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Which of the following should be avoided to prevent electrical fires?",
    type: "multipleChoice",
    options: [
      "Using certified electrical devices",
      "Overloading power outlets",
      "Checking wiring regularly",
      "None of the above",
    ],
    answer: "B",
  },
  {
    question:
      "A _________ fire extinguisher is best suited for electrical fires.",
    type: "identification",
    answer: "Class C",
  },

  // House Fires
  {
    question: "Cooking accidents are the most common cause of house fires.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Which of the following is a recommended way to prevent house fires?",
    type: "multipleChoice",
    options: [
      "Keeping flammable items near the stove",
      "Using damaged electrical cords",
      "Installing smoke alarms in key areas",
      "Ignoring candle safety",
    ],
    answer: "C",
  },
  {
    question:
      "A _______ alarm is an essential device in any home to warn occupants of a fire.",
    type: "identification",
    answer: "smoke",
  },
  {
    question: "In which part of the house do most fires start?",
    type: "multipleChoice",
    options: ["Garage", "Bedroom", "Kitchen", "Bathroom"],
    answer: "C",
  },
  {
    question: "Leaving cooking unattended is a common cause of house fires.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },

  // Vehicle Fires
  {
    question:
      "What should you avoid doing if a fire starts under your vehicle's hood?",
    type: "multipleChoice",
    options: [
      "Turning off the engine",
      "Opening the hood",
      "Calling emergency services",
      "Evacuating passengers",
    ],
    answer: "B",
  },
  {
    question:
      "Vehicle fires can be caused by both fuel leaks and electrical issues.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Carrying a small ________ in your car can help you respond to a minor fire.",
    type: "identification",
    answer: "fire extinguisher",
  },
  {
    question: "Which of these is a preventive measure for vehicle fires?",
    type: "multipleChoice",
    options: [
      "Ignoring dashboard warning lights",
      "Overloading the battery",
      "Regular vehicle maintenance",
      "Letting fluids leak",
    ],
    answer: "C",
  },
  {
    question: "Overheating engines can be a cause of vehicle fires.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },

  // Forest Fires
  {
    question: "Which of the following is NOT a cause of forest fires?",
    type: "multipleChoice",
    options: ["Lightning", "Campfires", "Cooking accidents", "Arson"],
    answer: "C",
  },
  {
    question: "Forest fires are only caused by human activities.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "_______ fires burn on the forest floor, consuming leaves and dry grass.",
    type: "identification",
    answer: "Surface",
  },
  {
    question: "What is a recommended way to prevent forest fires?",
    type: "multipleChoice",
    options: [
      "Conducting controlled burns",
      "Avoiding public awareness",
      "Ignoring fire bans",
      "Increasing vegetation",
    ],
    answer: "A",
  },
  {
    question: "Ground fires burn above the ground and spread to treetops.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "False",
  },

  // Ship Fires
  {
    question:
      "Fires that start in the ________ room of a ship are often due to fuel leaks or overheating.",
    type: "identification",
    answer: "engine",
  },
  {
    question:
      "Ship fires can be caused by both cooking accidents and electrical faults.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which of these is a critical preventive measure for ship fires?",
    type: "multipleChoice",
    options: [
      "Storing flammable cargo improperly",
      "Regular equipment checks",
      "Ignoring safety drills",
      "Skipping fire extinguisher training",
    ],
    answer: "B",
  },
  {
    question:
      "It is safe to delay sounding the alarm if a fire is spotted on a ship.",
    type: "trueFalse",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "If a fire occurs on a ship, what is the first step crew members should take?",
    type: "multipleChoice",
    options: [
      "Sound the alarm",
      "Wait for orders",
      "Ignore the fire",
      "Radio for help",
    ],
    answer: "A",
  },
];

const FireQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    const current = fireQuestions[currentQuestion];
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
    if (nextQuestion < fireQuestions.length) {
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
  
      const quizResultsRef = ref(db, `quizResults/fire`);
  
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
            You scored {score} out of {fireQuestions.length}
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
            Question {currentQuestion + 1} / {fireQuestions.length}
          </p>
          <h3>{fireQuestions[currentQuestion].question}</h3>
          <div className="gap">
            {fireQuestions[currentQuestion].type === "identification" && (
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Your answer"
                className="identification-input"
              />
            )}
          </div>
          {fireQuestions[currentQuestion].type !== "identification" && (
            <div className="gap"></div>
          )}
          {fireQuestions[currentQuestion].type === "multipleChoice" && (
            <div className="options-section">
              {fireQuestions[currentQuestion].options.map((option, index) => (
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
          {fireQuestions[currentQuestion].type === "trueFalse" && (
            <div className="options-section">
              {fireQuestions[currentQuestion].options.map((option, index) => (
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
          {fireQuestions[currentQuestion].type === "identification" && (
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

export default FireQuiz;