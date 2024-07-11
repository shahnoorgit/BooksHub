import React, { useState } from "react";
import toast from "react-hot-toast";

const useGetuser = () => {
  const [loading, setLoading] = useState(false);
  const X_PASSKEY = import.meta.env.VITE_X_PASSKEY;
  const getUser = async (username) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/user/${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-passkey": `${X_PASSKEY}`,
          },
        }
      );
      if (response.error) {
        toast.error(response.error);
        throw new Error("User not found");
      }
      const user = await response.json();
      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return { loading, getUser };
};

export default useGetuser;
