import React, { useState } from "react";
import toast from "react-hot-toast";

const useUplaodBook = () => {
  const [loading, setLoading] = useState(false);
  const uploadBook = async (formdata) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/books/upload", {
        method: "POST",
        body: formdata,
      });

      const data = res.json();

      if (data.error) {
        console.log(data.error);
        return toast.error(data.error);
      }

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, uploadBook };
};

export default useUplaodBook;
