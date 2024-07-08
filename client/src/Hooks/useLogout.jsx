import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setloading] = useState(false);
  const { setAuth } = useContext(AuthProvider);
  const logout = async () => {
    setloading(true);
    try {
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        return toast.error("Error while logging out");
      }

      localStorage.removeItem("auth");
      setAuth(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
      return toast.error("Error while logging out");
    } finally {
      setloading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
