import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  updateFormData,
  loginUser,
} from "../features/auth/authSlice";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const LoginCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, username } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !username) return;

    dispatch(loginUser());

    navigate("/dashboard");
  };

  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-yellow-400/20
        bg-black/80
        p-8
        shadow-2xl
      "
    >
      

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Welcome !
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Secure login access to your dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            dispatch(
              updateFormData({
                email: e.target.value,
                username,
              })
            )
          }
        />

        <InputField
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) =>
            dispatch(
              updateFormData({
                email,
                username: e.target.value,
              })
            )
          }
        />

        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginCard;