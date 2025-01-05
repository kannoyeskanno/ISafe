import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from './isafe_logo.png';
import './App.css'; 
import Sidenav from './components/sidenav';
import Carousel from './components/Carousel';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Quiz from './pages/Quiz/Quiz';
// Fire images
import industrialFire from './images/industrial.png';
import electricalFire from './images/electrical.png';
import houseFire from './images/house.png';
import vehicleFire from './images/vehicle.png';
import forestFire from './images/forest-fire.png';
import shipFire from './images/ship.png';

// Flood images
import dam from './images/dam.png';
import urban from './images/urban.png';
import river from './images/river.png';
import flash from './images/flash.png';
import coastal from './images/coastal.png';
import snow from './images/snow.png';


import electricalShockImage from './images/electricalShockImage.png';
import shortCircuitImage from './images/shortCircuitImage.jpg';
import faultyWiringImage from './images/faultyWiringImage.jpg';
import overloadingImage from './images/overloadingImage.jpg';
import lightningStrikeImage from './images/lightningStrikeImage.png';

import chemicalSpillImage from './images/chemicalSpillImage.png';
import nuclearAccidentImage from './images/nuclearAccidentImage.jpg';
import oilSpillImage from './images/oilSpillImage.png';
import industrialExplosionImage from './images/industrialExplosionImage.jpg';
import terroristAttackImage from './images/terroristAttackImage.png';
import deforestationImage from './images/deforestationImage.png';


import Header from './components/Header/Header';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


import PageHolder from './pages/PageHolder';


import FireQuiz from './pages/Quiz/FireQuiz/FireQuiz';
import FloodQuiz from './pages/Quiz/FloodQuiz/FloodQuiz';
import ElectricalQuiz from './pages/Quiz/ElectricalQuiz/ElectricalQuiz';
import ManMadeQuiz from './pages/Quiz/ManMadeQuiz/ManMadeQuiz';




const categories = [
  { disaster: 'Fire', id: 'fire' },
  { disaster: 'Flood', id: 'flood' },
  { disaster: 'Electrical', id: 'electrical' },
  { disaster: 'Man-made', id: 'man-made' },
];
const infoCards = [
  // Fire
  { title: 'Industrial Fires', description: 'A type of disaster in industrial areas.', image: industrialFire, id: 'IndustrialFire', category: 'fire' },
  { title: 'Electrical Fires', description: 'Caused by electrical faults.', image: electricalFire, id: 'ElectricalFire', category: 'fire' },
  { title: 'House Fires', description: 'Fires occurring in homes.', image: houseFire, id: 'HouseFire', category: 'fire' },
  { title: 'Vehicle Fires', description: 'Fires involving motor vehicles.', image: vehicleFire, id: 'VehicleFire', category: 'fire' },
  { title: 'Forest Fires', description: 'Uncontrolled fires in vegetation.', image: forestFire, id: 'ForestFire', category: 'fire' },
  { title: 'Ship Fires', description: 'Fires on ships, a dangerous hazard.', image: shipFire, id: 'ShipFire', category: 'fire' },

  // Flood
  { title: 'Dam Failure', description: 'A dam failure is a sudden, uncontrolled release of stored water.', image: dam, id: 'DamFailure', category: 'flood' },
  { title: 'Urban Flooding', description: 'Urban Flooding is an inundation of land in a constructed setting.', image: urban, id: 'UrbanFlooding', category: 'flood' },
  { title: 'River Flooding', description: 'Occurs when water levels rise over the top of river banks', image: river, id: 'RiverFlooding', category: 'flood' },
  { title: 'Flash Flood', description: 'A flash flood is a flood that begins within 6 hours, and often within 3 hours, of a heavy rainfall', image: flash, id: 'FlashFlood', category: 'flood' },
  { title: 'Coastal Flooding', description: 'Coastal flooding occurs when dry and low-lying land is submerged (flooded) by seawater', image: coastal, id: 'CoastalFlooding', category: 'flood' },
  { title: 'Snowmelt Flooding', description: 'A significant flood rise in a river caused by the melting of snowpack', image: snow, id: 'SnowmeltFlooding', category: 'flood' },
  

 // Electrical
{ title: 'Electrical Shock', description: 'Occurs when a person becomes part of an electrical circuit.', image: electricalShockImage, id: 'ElectricalShock', category: 'electrical' },
{ title: 'Short Circuit', description: 'A short circuit is a connection allowing current to travel along an unintended path.', image: shortCircuitImage, id: 'ShortCircuit', category: 'electrical' },
{ title: 'Overloading', description: 'When too much current flows through electrical wiring, causing overheating.', image: overloadingImage, id: 'Overloading', category: 'electrical' },
{ title: 'Faulty Wiring', description: 'Improper or damaged wiring can lead to fires and electrical hazards.', image: faultyWiringImage, id: 'FaultyWiring', category: 'electrical' },
{ title: 'Lightning Strike', description: 'A sudden and violent discharge of electricity during thunderstorms.', image: lightningStrikeImage, id: 'LightningStrike', category: 'electrical' },

  // Man-made
// Man-Made
{ title: 'Chemical Spill', description: 'The accidental release of hazardous chemicals into the environment.', image: chemicalSpillImage, id: 'ChemicalSpill', category: 'man-made' },
{ title: 'Nuclear Accident', description: 'An unexpected event involving the release of radiation.', image: nuclearAccidentImage, id: 'NuclearAccident', category: 'man-made' },
{ title: 'Oil Spill', description: 'The release of petroleum into marine or coastal environments.', image: oilSpillImage, id: 'OilSpill', category: 'man-made' },
{ title: 'Industrial Explosion', description: 'A catastrophic release of energy due to industrial processes.', image: industrialExplosionImage, id: 'IndustrialExplosion', category: 'man-made' },
{ title: 'Terrorist Attack', description: 'A deliberate act of violence to achieve political or ideological goals.', image: terroristAttackImage, id: 'TerroristAttack', category: 'man-made' },
{ title: 'Deforestation', description: 'The large-scale removal of trees impacting the environment.', image: deforestationImage, id: 'Deforestation', category: 'man-mmade' },


  
  
];

const categoryStyles = {
  fire: { odd: '#DF4040', even: '#D7E901' },
  flood: { odd: '#3362D9', even: '#58D7FF' },
  electrical: { odd: '#FFD700', even: '#FFF5CC' },
  "man-made": { odd: '#FFA500', even: '#FFDEA5' },
};

const App = () => {
  const [isMerged, setIsMerged] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('fire'); 
  const navigate = useNavigate();

  const toggleMerge = () => {
    setIsMerged(prev => !prev);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId); 
  };

  const handleCardClick = (id) => {
    navigate(`/pages/${id}`);
  };

  return (
    <div className="app">  
     

      <main className="main-content">
        <h1 className='welcome-message'>Welcome to iSAFE!</h1>
        <Carousel />

        <div className="categories">
          <button 
            className={`merge-btn ${isMerged ? 'merged' : ''}`} 
            onClick={toggleMerge}
          >
            {isMerged ? '><' : '<>'}
          </button>

          {/* Category Buttons */}
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button 
                key={index} 
                className={`category-btn ${isMerged ? 'hidden' : ''} ${isSelected ? `${category.id}-selected` : ''}`} 
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.disaster}
              </button>
            );
          })}
        </div>

        <div className="info-list">
          <ul>
            {infoCards
              .filter(card => card.category === selectedCategory)
              .map((card, index) => {
                const isOdd = index % 2 === 0;
                const backgroundColor = isOdd 
                  ? categoryStyles[selectedCategory]?.odd 
                  : categoryStyles[selectedCategory]?.even;

                return (
                  <li 
                    key={index} 
                    className="info-list-item" 
                    style={{ backgroundColor, color: isOdd ? 'white' : 'black' }}
                    onClick={() => handleCardClick(card.id)}
                  >
                    <div className='info-item'>
                      <div className='info-text'>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                      <img className='info-img' src={card.image} alt={card.title} />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </div>
  );
};

const InfoPage = ({ id }) => {
  const card = infoCards.find(card => card.id === id);
  if (!card) return <p>Information not found.</p>;

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.description}</p>
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/:id" element={<PageHolder />} />
        <Route path="/pages/quiz" element={<Quiz/>} />

        <Route path="/take-quiz/fire" element={<FireQuiz/>} />
        <Route path="/take-quiz/flood" element={<FloodQuiz/>} />
        <Route path="/take-quiz/electrical" element={<ElectricalQuiz/>} />
        <Route path="/take-quiz/manmade" element={<ManMadeQuiz/>} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        
      </Routes>
    </Router>
  );
};

export default Root;
