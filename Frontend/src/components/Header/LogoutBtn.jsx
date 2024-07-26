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
      className=" hover:scale-110 text-[#f94747] transition-all ease-in-out uppercase"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
