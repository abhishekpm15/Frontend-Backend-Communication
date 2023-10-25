import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPage = () => {
  const location = useLocation();

  const [inputHandler, setInputHandler] = useState({});

  const handleChange = (event) => {
    setInputHandler({
      ...inputHandler,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = () => {
    axios({
      method: "patch",
      baseURL: "https://backend-app-production-96e7.up.railway.app",
      url: `/modify-api/${location.state.data._id}`,
      data: inputHandler,
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200)
          toast.success("Successfully updated the data !");
        window.location.replace("/data");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="mt-[10%] flex flex-col space-y-5 mb-4">
        <div>
          <input
            type="text"
            className="bg-gray-100 rounded-lg border border-black px-5 py-2"
            onChange={handleChange}
            name="name"
            defaultValue={location.state.data.name}
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-100 rounded-lg border border-black px-5 py-2"
            onChange={handleChange}
            name="pass"
            defaultValue={location.state.data.pass}
          />
        </div>
      </div>
      <div>
        <button
          className="text-xl text-white bg-gray-900 py-2 px-2 rounded-lg outline outline-cyan-100 "
          onClick={sendData}
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default EditPage;
