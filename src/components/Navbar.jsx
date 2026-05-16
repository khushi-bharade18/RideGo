import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { logoutUser } from "../features/auth/authSlice";

import Logo from "./Logo";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());

    navigate("/");
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-yellow-400/10
        bg-black
        px-4
        py-4
        shadow-lg
      "
    >
      <div
        className="
          mx-auto
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-5">
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <UserProfile />

          <button
            onClick={handleLogout}
            className="
              rounded-xl
              border
              border-yellow-400/30
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-400
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:text-black
            "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;