import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authcontext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (!user) {
    navigate("/login");
  }
  return children;
}

export default ProtectedRoute;
