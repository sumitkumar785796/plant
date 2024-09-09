import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/pages/Layout'
import Layoutauth from './components/pages/auth/Layout'
import Header from './components/pages/Header';
import AboutPage from './components/pages/about/AboutPage';
import Shop from './components/pages/product/Shop';
import Contact from './components/pages/contact/Contact';
import NoPage from './components/pages/NoPage';
import Login from './components/pages/auth/Login';
import Registration from './components/pages/auth/Registration';
import Profile from './components/pages/auth/Profile';
import AddToCart from './components/cartPage/AddToCart';
import CheckOut from './components/cartPage/CheckOut';
import OrderSuccess from './components/cartPage/OrderSuccess';
import AuthContext from './context/AuthContext';
import Blog from './components/pages/blog/Blog';
import Services from './components/pages/services/Service';
import Port from './components/pages/portifolio/Port';
import Gallary from './components/pages/gallary/Gallary';
const App = () => {
  const { getuser } = useContext(AuthContext)
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    if (getuser) {
      setProfile(getuser)
    }
  }, [getuser])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layoutauth />} >
            {!profile &&
              <Route path="/user" element={<Login />} />
            }
            {!profile &&
              <Route path="/reg" element={<Registration />} />
            }
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Header />} />
            {profile &&
              <Route path="profile" element={<Profile />} />
            }
            <Route path="addtocart" element={<AddToCart />} />
            {profile ? (

              <Route path="checkout" element={<CheckOut />} />
            ) : (
              <Route path="/checkout" element={<Navigate to="/user" />} />
            )
            }
            {profile &&
              <Route path="successorder" element={<OrderSuccess />} />
            }
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Port />} />
            <Route path="gallery" element={<Gallary />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ourwork" element={<NoPage/>}/>
            <Route path="*" element={<Header />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App