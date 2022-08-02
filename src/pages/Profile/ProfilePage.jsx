import { useState } from "react";

import "./ProfilePage.css";

import Profile from "./components/Profile";

function ProfilePage() {
  const [profiles, setProfiles] = useState([
    "Adrian",
    "Lopez",
    "Joaquin",
    "Jhon",
  ]);

  return (
    <div className="screen">
      <div className="menu">
        <div className="profiles">
          {profiles.map((profile, index) => (
            <Profile name={profile} key={index} />
          ))}

          <div className="profile">
            <h2 className="profile-name"></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
