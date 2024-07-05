import React, { useState } from "react";

const Upload = () => {
  const [file, setfile] = useState();
  const handlefile = (e) => {
    setfile(e.target.files[0]);
  };
  const handlesub = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      console.log(res); // Handle the response as needed. For example, display success message.
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handlesub(e)}>
        <input
          onChange={(e) => handlefile(e)}
          type="file"
          placeholder="add file"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
