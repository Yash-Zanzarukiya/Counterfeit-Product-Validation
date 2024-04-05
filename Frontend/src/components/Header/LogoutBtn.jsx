import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../app/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(authLogout());
    });
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
