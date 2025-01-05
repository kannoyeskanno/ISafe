import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './sidenav.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      closeNav();  // Close the sidebar when logging out
      navigate('/login');
    } catch (error) {
      console.error("Logout failed: ", error.message);
    }
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <NavLink to="/" onClick={closeNav} activeClassName="active">Home</NavLink>
        <NavLink to="/pages/fire/IndustrialFire" onClick={closeNav} activeClassName="active">Disasters</NavLink>
        <NavLink to="pages/quiz" onClick={closeNav} activeClassName="active">Quiz</NavLink>
        <NavLink to="/about" onClick={closeNav} activeClassName="active">About</NavLink>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>&#9776;</span>
    </div>
  );
};

export default Sidebar;
