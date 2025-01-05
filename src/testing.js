import React from 'react';
import './App.css'; 

const App = () => {
  const categories = ['Fire', 'Flood', 'Electrical', 'Man-made'];
  const infoCards = [
    { title: 'Industrial Fires', description: 'A type of disaster in industrial areas.' },
    { title: 'Electrical Fires', description: 'Caused by electrical faults.' },
    { title: 'House Fires', description: 'Fires occurring in homes.' },
    { title: 'Vehicle Fires', description: 'Fires involving motor vehicles.' },
    { title: 'Forest Fires', description: 'Uncontrolled fires in vegetation.' },
    { title: 'Ship Fires', description: 'Fires on ships, a dangerous hazard.' },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="logo">iSAFE</div>
        <button className="signup-btn">Sign up</button>
      </header>

      <main className="main-content">
        <h1>Welcome to iSAFE!</h1>

        <div className="carousel">
          <div className="carousel-item">
            <img src="forest_fire_image.png" alt="Forest Fire" />
            <div className="carousel-caption">
              <h2>Forest Fire</h2>
              <p>An uncontrolled fire in vegetation more than 1.8 meters tall.</p>
            </div>
          </div>
        </div>

        <div className="categories">
          {categories.map((category, index) => (
            <button key={index} className="category-btn">
              {category}
            </button>
          ))}
        </div>

        <div className="info-cards">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="sign-up-card-btn">Sign Up</button>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
};

export default App;
