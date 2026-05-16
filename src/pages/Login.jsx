import { Navigate } from "react-router";
import { useSelector } from "react-redux";

import AuthLayout from "../components/AuthLayout";
import LoginCard from "../components/LoginCard";

const Login = () => {
  const { isAuthenticated } = useSelector(
    (state) => state.auth
  );

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AuthLayout>
      <LoginCard />
    </AuthLayout>
  );
};

export default Login;