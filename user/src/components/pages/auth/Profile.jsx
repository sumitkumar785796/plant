import React, { useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import AuthContext from "../../../context/AuthContext";
import MyOrder from "../../cartPage/MyOrder";
const Profile = () => {
  const { getuser, loginMessage } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (getuser) {
      setProfile(getuser);
    }
  }, [getuser]);

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="container">
      <div className="profile-header text-center">
        <img
          src="usersicon.png"
          alt="Profile Picture"
          className="profile-pic"
        />
        <h2 className="mt-3">{profile.fullname}</h2>
      </div>
      <div className="profile-info">
        <h4>Contact Information</h4>
        <ul className="list-unstyled">
          <li>
            <strong>Email:</strong>
            {profile.email}
          </li>
        </ul>
        <h1 className="text-center" style={{fontWeight:"1000"}}>Your Order List</h1>
        <div className="row">
        <MyOrder/>
        </div>
      </div>
      <br />
      <br />
    </div>
    </>
  );
};

export default Profile;
