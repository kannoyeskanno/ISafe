import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Electrical from './pages/Electrical/Electrical';
import ManMade from './pages/ManMade/ManMade';

import './App.css';
import './root/Root.css';

function App() {
  return (
    <Router>
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/man-made" element={<ManMade />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </main>
  </div>
</Router>

  );
}

export default App;
