import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("login"));
    if (userData) {
      setIsAuthenticated(true);
       setUser(userData);
      // navigate("/");
      return user;
    } else {
      // navigate("/login");
    }
  }, []);
  return { isAuthenticated: isAuthenticated, user: user };
};

export default useAuth;
