import authService from "../../backend/auth";
import { logout as authLogout } from "../../app/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(authLogout());
    });

    navigate("/");
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-red-400 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
