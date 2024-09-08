import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import TopBar from './TopBar';
import AuthContext from '../../context/AuthContext';
import Navbar from './NavBar';
import MiddleBar from './MiddleBar';

const Layout = () => {
  const { getuser, signoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (getuser) {
          setProfile(getuser);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [getuser]);

  const handleLogout = () => {
    signoutUser(); 
    setProfile(null);
  };

  const handleCartClick = () => {
    setCartLoading(true);
    setTimeout(() => {
      setCartLoading(false);
      // Perform actual cart actions here
    }, 1000);
  };

  return (
    <>
      <TopBar />
      <MiddleBar/>
      <Navbar
        profile={profile} 
        handleLogout={handleLogout} 
        loading={loading} 
        handleCartClick={handleCartClick} 
        cartLoading={cartLoading} 
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
