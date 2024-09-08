import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const { signinUser } = useContext(AuthContext);
  const [state, setState] = useState({
    adminemail: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
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
      const { adminemail, password } = state;
      const res = await signinUser({ adminemail, password });
      if (res.status === 200) {
        toast.success(res.data.message);
        // window.location.href = '/dashboard';
        navigate('/admin')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      {/*  Body Wrapper */}
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <ToastContainer />
                    <h1 style={{ fontWeight: "1000" }}>Admin Panel</h1>
                    <form onSubmit={handleSubmition}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input type="email" className="form-control" id="email"
                          name='adminemail'
                          onChange={setRecord}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password" className="form-control" id="password"
                          name='password'
                          onChange={setRecord}
                        />
                      </div>

                      <button type='submit' className="btn btn-primary w-100 fs-4 mb-4 rounded-2">Sign In</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login