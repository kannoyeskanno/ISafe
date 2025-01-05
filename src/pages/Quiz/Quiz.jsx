import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import CustomModal from '../../components/CustomModal/CustomModal';
import './Quiz.css';
import fireImage from '../../images/fire.png';
import floodImage from '../../images/dam.png';
import electricalImage from '../../images/electrical.png';
import manMadeImage from '../../images/manmade.png';
import allDisasterImage from '../../images/dam.png';

const quizData = [
  { id: "Fire", title: 'Fire', image: fireImage, description: 'Quiz about fire disasters.' },
  { id: "Flood", title: 'Flood', image: floodImage, description: 'Quiz about flood disasters.' },
  { id: "Electrical", title: 'Electrical', image: electricalImage, description: 'Quiz about electrical hazards.' },
  { id: "ManMade", title: 'Man Made', image: manMadeImage, description: 'Quiz about man-made disasters.' },
  // { id: 5, title: 'All Disasters', image: allDisasterImage, description: 'Quiz covering all types of disasters.' },
];

const Quiz = () => {
  const [flipped, setFlipped] = useState(Array(5).fill(false));
  const [showModal, setShowModal] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setShowModal(true); 
      }
      setIsLoggedIn(!!user); 
      console.log(user ? 'User is logged in' : 'User is not logged in'); 
    });
    return unsubscribe;
  }, []);

  const handleFlip = (index) => {
    setFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  const handleQuizClick = (quizId) => {
    if (isLoggedIn) {
      navigate(`/take-quiz/${quizId}`);
    } else {
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleLoginRedirect = () => {
    setShowModal(false); 
    navigate('/login');
  };

  return (
    <div className="quiz-container">
      {quizData.map((quiz, index) => (
        <div
          key={quiz.id}
          className={`quiz-card ${flipped[index] ? 'flipped' : ''}`}
          onClick={() => handleFlip(index)}
        >
          <div className="quiz-card-inner">
            <div className="quiz-card-front">
              <h2 className="quiz-title">{quiz.title}</h2>
              <img src={quiz.image} alt={quiz.title} className="quiz-image" />
              <button className="take-quiz-button" onClick={(e) => {
                e.stopPropagation();
                handleQuizClick(quiz.id);
              }}>Take Quiz</button>
            </div>
            <div className="quiz-card-back">
              <h2 className="quiz-title">{quiz.title}</h2>
              <p>{quiz.description}</p>
              <button className="take-quiz-button" onClick={(e) => {
                e.stopPropagation(); 
                handleQuizClick(quiz.id);
              }}>Take Quiz</button>
            </div>
          </div>
        </div>
      ))}

      <CustomModal
        isOpen={showModal} 
        title="Authentication Required"
        message="You must log in or sign up to take this quiz."
        onClose={handleCloseModal} 
        onConfirm={handleLoginRedirect} 
        confirmText="Log in / Sign up"
        cancelText="Close"
      />
    </div>
  );
};

export default Quiz;
