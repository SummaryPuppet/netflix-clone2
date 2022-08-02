import "./Profile.css";
import profilesImg from "../utils/profileImg";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../context/LoginProvider";

function Profile({ name }) {
  const navigate = useNavigate();
  const { logIn } = useLogin();

  const handleClick = () => {
    logIn();
    navigate("/");
  };

  return (
    <button onClick={handleClick} className="profile">
      <img
        src={profilesImg.penguin}
        alt="profile img"
        className="profile-img"
      />
      <h2 className="profile-name">{name}</h2>
    </button>
  );
}

export default Profile;
