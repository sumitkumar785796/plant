import React, { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from "../../../context/AuthContext";

const Registration = () => {
  const navigate =useNavigate()
  const { signupUser } = useContext(AuthContext);
  const [getInput, setInput] = useState({
    email: '',
    fullname: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const setRecord = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmition = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, fullname, password } = getInput;
      const res = await signupUser({ email, fullname, password });
      setInput({
        email: '',
        fullname: '',
        password: '',
      });
      // Show success toast
      toast.success(res.data.message, {
        onClose: () => {
          // Redirect after toast is closed
          // window.location.href = '/reg';
          navigate('/reg')
        }
      });
      window.location.reload();
    } catch (error) {
      console.log(error);

      // Show error toast
      toast.error(error.response?.data?.message || 'An error occurred', {
        onClose: () => {
          setLoading(false);
        }
      });
    } finally {
      // Ensure loading state is stopped after toast message is handled
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <ToastContainer />
                <h4 className="card-title text-center">Register</h4>
                <form onSubmit={handleSubmition}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name='fullname'
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={getInput.fullname}
                      onChange={setRecord}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name='email'
                      className="form-control"
                      placeholder="Enter email"
                      value={getInput.email}
                      onChange={setRecord}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name='password'
                      placeholder="Password"
                      value={getInput.password}
                      onChange={setRecord}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'SignUp'
                    )}
                  </button>
                  <div className="text-center mt-3">
                    <Link to="/user">Already have an account? Login</Link>
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

export default Registration;
