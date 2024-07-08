import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthProvider);

  const login = async ({ email, password }) => {
    setLoading(true);
    console.log("formdata", email);
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.error) {
        return toast.error(data.error);
      }

      setAuth(data);
      localStorage.setItem("auth", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error);
      return toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
