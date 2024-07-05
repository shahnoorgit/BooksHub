import React, { useState } from "react";
import useSignup from "../Hooks/useSignup";

const Signup = () => {
  const [img, setImg] = useState(null);
  const { loading, signup } = useSignup();
  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };
  const [Fdata, setFdata] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const submithandle = (e) => {
    e.preventDefault();

    // Perform form validation logic here
    if (
      !Fdata.username ||
      !Fdata.email ||
      !Fdata.password ||
      !Fdata.phone ||
      !Fdata.confirmPassword
    ) {
      console.log("Please fill in all fields.");
      return;
    }

    if (Fdata.password !== Fdata.confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    // Log the form data

    // Create FormData object
    const formData = new FormData();
    formData.append("file", img);
    formData.append("username", Fdata.username);
    formData.append("email", Fdata.email);
    formData.append("password", Fdata.password);
    formData.append("phone", Fdata.phone);
    formData.append("confirmPassword", Fdata.confirmPassword);

    // Log the FormData object

    // Perform the submission logic, e.g., send to server
    signup(formData).then((data) => console.log(data));
  };

  return (
    <div className=" w-screen h-screen flex bg-gray-300 justify-center items-center">
      <form onSubmit={(e) => submithandle(e)} className=" w-1/2 max-sm:w-[80%]">
        <h1 className="text-3xl flex justify-center items-center text-center mb-5 font-bold">
          <span>Sign Up to BooksHub </span>
          <img className=" max-sm:hidden" src="/bookshub.svg" width={50} />
        </h1>
        <input
          value={Fdata.username}
          onChange={(e) => setFdata({ ...Fdata, username: e.target.value })}
          required
          type="text"
          placeholder="Username"
          className="w-full p-4 border hover:scale-105 hover:shadow-2xl shadow-md rounded-lg focus:outline-none"
        />
        <input
          value={Fdata.email}
          onChange={(e) => setFdata({ ...Fdata, email: e.target.value })}
          required
          type="Email"
          placeholder="Email"
          className="w-full p-4 shadow-md hover:scale-105 transition-all ease-in hover:shadow-2xl mt-4 border rounded-lg focus:outline-none"
        />
        <input
          value={Fdata.phone}
          onChange={(e) => setFdata({ ...Fdata, phone: e.target.value })}
          required
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 shadow-md hover:scale-105 transition-all ease-in hover:shadow-2xl mt-4 border rounded-lg focus:outline-none"
        />
        <input
          value={Fdata.password}
          onChange={(e) => setFdata({ ...Fdata, password: e.target.value })}
          required
          type="password"
          placeholder="Password"
          className="w-full p-4 shadow-md hover:scale-105 transition-all ease-in hover:shadow-2xl mt-4 border rounded-lg focus:outline-none"
        />
        <input
          value={Fdata.confirmPassword}
          onChange={(e) =>
            setFdata({ ...Fdata, confirmPassword: e.target.value })
          }
          required
          type="password"
          placeholder="Confirm Password"
          className="w-full p-4 shadow-md hover:scale-105 transition-all ease-in hover:shadow-2xl mt-4 border rounded-lg focus:outline-none"
        />
        <div className="rounded-md border mt-4 border-indigo-500 bg-gray-50 p-2 shadow-md w-full">
          <label
            htmlFor="upload"
            className="flex items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-white stroke-indigo-500"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-600 font-medium">
              {img ? "uploaded!" : "upload"}
            </span>
          </label>
          <input
            onChange={(e) => handleImageChange(e)}
            required
            id="upload"
            type="file"
            className="hidden"
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className="mt-4 shadow-2xl text-center">
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Signup;
