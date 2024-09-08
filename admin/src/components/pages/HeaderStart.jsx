import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

const HeaderStart = () => {
    const { getuser, signoutUser } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Simulate data fetching
                if (getuser) {
                    setProfile(getuser);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchProfile();
    }, [getuser]);

    const handleLogout = () => {
        signoutUser(); // Call the logout function from AuthContext
        setProfile(null); // Clear the profile after logging out
    };

    return (
        <>
            <header className="app-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* <ul className="navbar-nav">
                        <li className="nav-item d-block d-xl-none">
                            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                                <i className="ti ti-menu-2" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                                <i className="ti ti-bell-ringing" />
                                <div className="notification bg-primary rounded-circle" />
                            </a>
                        </li>
                    </ul> */}
                    <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../assets/images/profile/user1.jpg" alt="" width={35} height={35} className="rounded-circle" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                                    <div className="message-body">
                                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                                            <i className="ti ti-user fs-6" />
                                            <p className="mb-0 fs-3">{profile?.adminfullname} Profile</p>
                                        </a>
                                        <button onClick={handleLogout} className="btn btn-outline-primary mx-3 mt-2 d-block shadow-none">Logout</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderStart