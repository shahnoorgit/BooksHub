import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthProvider);
  const login = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const data = await res.json();
      if (data.error) {
        return toast.error(error);
      }

      setAuth(data);
      return data;
    } catch (error) {
      console.log(error);
      return toast.error(error);
    }
  };
  return { loading, login };
};

export default useLogin;
