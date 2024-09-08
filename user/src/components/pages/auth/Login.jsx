import React, { useContext, useState } from 'react';
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from "../../../context/AuthContext";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const setRecord = (e) => {
    const { name, value } = e.target;
    setState((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmition = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const { email, password } = state;
      const res = await signinUser({ email, password });
      if (res.status === 200) {
        toast.success(res.data.message);
        window.location.href = '/profile';

      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
              <ToastContainer/>
                <h4 className="card-title text-center">Login</h4>
                <form onSubmit={handleSubmition}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={setRecord}
                      name='email'
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={setRecord}
                      name='password'
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'Login'
                    )}
                  </button>
                  <div className="text-center mt-3">
                    <Link to="/reg">Registration Here?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Login;
