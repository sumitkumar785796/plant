import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [getuser, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('adminauthtoken');
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        try {
          const { data } = await axios.get('/api/admin/profile', config);
          setUser(data.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error(error.response.data.message);
            localStorage.removeItem('adminauthtoken');
            window.location.href = '/admin';
            return null;
          } else {
            console.error('An error occurred while fetching the profile:', error);
            return null;
          }
        }
      }
    })();
  }, []);

  const signupUser = async (userData) => {
    try {
      const { data } = await axios.post('/api/signup', userData);
      //   localStorage.setItem('authtoken', data.token);
      setUser(data);
      return data
    } catch (error) {
      if (error.response && error.response.status === 401 ||error.response.status === 500) {
        toast.error(error.response.data.message);
        return null;
      }
    }
  };

  const signinUser = async (userData) => {
    try {
      const data = await axios.post('/api/admin/signin', userData);
      localStorage.setItem('adminauthtoken', data.data.token);
      setUser(data);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error(error.response.data.message);
        return null;
      }
    }
  };
  const signoutUser = () => {
    localStorage.removeItem('adminauthtoken');
    setUser(null);
    window.location.href = '/admin';
    // Optionally, make an API call to sign out on the server
    // await axios.post('/api/signout', {}, { headers: { Authorization: `Bearer ${token}` } });
  };

  return (
    <AuthContext.Provider value={{ getuser, signinUser, signupUser, signoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
