import React, { useState } from "react";
import "../../../root/QuizFormat.scss";
import { auth, db } from '../../../firebase';  
import { ref, push } from 'firebase/database';

const floodQuestions = [
    // Multiple Choice Questions
    {
      question: "What is the primary cause of urban flooding?",
      type: "multipleChoice",
      options: ["High river levels", "Poor drainage systems", "Deforestation", "Dam failure"],
      answer: "B",
    },
    {
      question: "What is a key factor in causing flash floods?",
      type: "multipleChoice",
      options: ["Heavy snowfall", "Gradual rainfall", "Intense, sudden rainfall", "Cloudy skies"],
      answer: "C",
    },
    {
      question: "Snowmelt flooding is most common in:",
      type: "multipleChoice",
      options: ["Tropical regions", "Areas with mild winters", "Regions with significant snowfall", "Desert areas"],
      answer: "C",
    },
    {
      question: "Which type of flooding often affects coastal cities and low-lying areas due to sea-level rise?",
      type: "multipleChoice",
      options: ["Flash flooding", "Coastal flooding", "River flooding", "Urban flooding"],
      answer: "B",
    },
    {
      question: "What is an effective preparedness measure against river flooding?",
      type: "multipleChoice",
      options: ["Building underground drainage", "Planting vegetation along riverbanks", "Adding dams to urban areas", "Rainwater harvesting"],
      answer: "B",
    },
  
    // True or False Questions
    {
      question: "Dam failure is one of the least common but potentially most catastrophic causes of flooding.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "Flash floods usually give ample warning time for evacuation.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question: "Urban flooding can be worsened by impermeable surfaces, like concrete.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "River flooding only occurs in rural areas.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question: "Snowmelt flooding can be caused by rain-on-snow events.",
      type: "trueFalse",
      options: ["True", "False"],
      answer: "True",
    },
  
    // Identification Questions
    {
      question: "Identify the term: A type of flooding primarily caused by rapid snow melting in the spring.",
      type: "identification",
      answer: "Snowmelt flooding",
    },
    {
      question: "Identify the term: A type of flood commonly occurring in coastal areas due to high tides, storms, or rising sea levels.",
      type: "identification",
      answer: "Coastal flooding",
    },
    {
      question: "Identify the term: This type of flooding happens in areas where rainwater cannot be absorbed due to the high amount of pavement and concrete.",
      type: "identification",
      answer: "Urban flooding",
    },
    {
      question: "Identify the term: The sudden and intense flood resulting from a dam breaking.",
      type: "identification",
      answer: "Dam failure flooding",
    },
    {
      question: "Identify the term: Flooding that occurs when rivers overflow due to excessive rain or snowmelt, affecting nearby areas.",
      type: "identification",
      answer: "River flooding",
    },
  ];
  
const FloodQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    const current = floodQuestions[currentQuestion];
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
    if (nextQuestion < floodQuestions.length) {
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
  
      const quizResultsRef = ref(db, `quizResults/flood`);
  
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
            You scored {score} out of {floodQuestions.length}
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
            Question {currentQuestion + 1} / {floodQuestions.length}
          </p>
          <h3>{floodQuestions[currentQuestion].question}</h3>
          <div className="gap">
            {floodQuestions[currentQuestion].type === "identification" && (
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Your answer"
                className="identification-input"
              />
            )}
          </div>
          {floodQuestions[currentQuestion].type !== "identification" && (
            <div className="gap"></div>
          )}
          {floodQuestions[currentQuestion].type === "multipleChoice" && (
            <div className="options-section">
              {floodQuestions[currentQuestion].options.map((option, index) => (
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
          {floodQuestions[currentQuestion].type === "trueFalse" && (
            <div className="options-section">
              {floodQuestions[currentQuestion].options.map((option, index) => (
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
          {floodQuestions[currentQuestion].type === "identification" && (
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

export default FloodQuiz;