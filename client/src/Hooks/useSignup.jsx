import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthProvider);
  const signup = async (formdata) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/sign-up", {
        method: "POST",
        body: formdata,
      });
      const data = await res.json();
      if (data.error) {
        return toast.error("Error while signing up");
      }
      toast.success("Signup successful");
      localStorage.setItem("auth", JSON.stringify(data));
      setAuth(data);
      return data;
    } catch (error) {
      toast.error("Failed to signup");
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
