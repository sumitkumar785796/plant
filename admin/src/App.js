import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategories from './components/pages/product/AddCategories';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import AddPlant from './components/pages/product/AddPlant';
import ViewProduct from './components/pages/product/ViewProduct';
import SingleCategorie from './components/pages/product/SingleCategorie';
import Login from './components/auth/Login';
import AuthContext from './context/AuthContext';
import OrderStatus from './components/pages/OrderStatus';
import AddBlog from './components/pages/blog/AddBlog';
import ViewBlogs from './components/pages/blog/ViewBlogs';

const App = () => {
  const { getuser } = useContext(AuthContext)
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    if (getuser) {
      setProfile(getuser)
    }
  }, [getuser])

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <BrowserRouter>
        <Routes>
          {!profile &&

            <Route path="/admin" element={<Login />} />
          }
          {profile &&

          
            <Route path="/admin" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="addcategories" element={<AddCategories />} />
              <Route path="addcategories/:cid" element={<AddCategories />} />
              <Route path="addplant" element={<AddPlant />} />
              <Route path="addplant/:pid" element={<AddPlant />} />
              <Route path="viewproduct" element={<ViewProduct />} />
              <Route path="viewproduct/:id" element={<SingleCategorie />} />
              <Route path="/admin/:orderId" element={<OrderStatus />} />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="addblog/:pid" element={<AddBlog />} />
              <Route path="viewblog" element={<ViewBlogs />} />
              <Route path="*" element={<Home />} />
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;