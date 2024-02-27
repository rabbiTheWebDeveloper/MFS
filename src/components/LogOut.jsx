import { CiLogout } from "react-icons/ci";
import { removeUserInfo } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    try {
      removeUserInfo("token");
      removeUserInfo("user");
      navigate("/login")
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <button onClick={handleLogOut} aria-label="Log out">
      <CiLogout className="logout-icon" />
    </button>
  );
};

export default LogOut;
