import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [Fdata, setFdata] = useState({
    email: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const submithandle = async (e) => {
    e.preventDefault();
    console.log(Fdata);
    await login(Fdata);
    // Reset form fields
  };
  return (
    <div className=" w-screen h-screen flex bg-gray-300 justify-center items-center">
      <form onSubmit={(e) => submithandle(e)} className=" w-1/2 max-sm:w-[80%]">
        <h1 className="text-3xl flex justify-center items-center text-center mb-5 font-bold">
          <span>Login to BooksHub </span>
          <img className=" max-sm:hidden" src="/bookshub.svg" width={50} />
        </h1>

        <input
          value={Fdata.email}
          onChange={(e) => setFdata({ ...Fdata, email: e.target.value })}
          required
          type="Email"
          placeholder="Email"
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

        <button
          type="submit"
          className="w-full py-4 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          {loading ? "Logging you in..." : "Login"}
        </button>
        <Link
          to={"/sign-up"}
          className="mt-4 hover:text-blue-600 max-sm:text-sm hover:underline shadow-2xl text-center"
        >
          Do not have an account? signup now
        </Link>
      </form>
    </div>
  );
};

export default Login;
