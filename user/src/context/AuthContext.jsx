import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [getuser, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('authtoken');
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        try {
          const { data } = await axios.get('/api/user/profile', config);
          setUser(data.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error(error.response.data.message);
            localStorage.removeItem('authtoken');
            window.location.href = '/';
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
      const { data } = await axios.post('/api/user/signup', userData);
      //   localStorage.setItem('authtoken', data.token);
      setUser(data);
      return data
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.errors) {
          errorData.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(errorData.message || 'An error occurred');
        }
      } else {
        console.error('An error occurred:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  const signinUser = async (userData) => {
    try {
      const data = await axios.post('/api/user/signin', userData);
      localStorage.setItem('authtoken', data.data.token);
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
    localStorage.removeItem('authtoken');
    setUser(null);
    window.location.href = '/';
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
