import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth } from '../../firebase';
import Sidenav from '../../components/sidenav';
import logo from '../../isafe_logo.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setAuthChecked(true);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Helmet>
        <title>iSAFE</title>
      </Helmet>
      <header className="header">
        <div className='navigation'>
          <Sidenav />
          <img src={logo} alt="iSAFE" className='logo' />
        </div>
        {authChecked && !isLoggedIn && (
          <div className='auth-buttons'>
            <button className="login-btn" onClick={() => navigate('/login')}>Log in</button>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Sign up</button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
