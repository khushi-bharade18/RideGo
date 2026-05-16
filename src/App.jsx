import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router";

import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookingConfirmation from "./pages/BookingConfirmation";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (state) => state.auth
  );

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
};

export default App;