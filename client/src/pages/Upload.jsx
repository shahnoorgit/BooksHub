import React from "react";
import { Form } from "react-router-dom";
import CustomForm from "../components/CustomForm";

const Upload = ({ auth }) => {
  return (
    <section className=" mt-5 flex w-screen justify-center">
      <CustomForm auth={auth} />
    </section>
  );
};

export default Upload;
