import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [inputHandler, setInputHandler] = useState({});

  const handleChange = (event) => {
    setInputHandler({
      ...inputHandler,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = () => {
    axios({
      method: "post",
      baseURL: "https://backend-app-production-80cd.up.railway.app/",
      url:"/api",
      data: inputHandler,
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Successfully inserted the data !");
          setTimeout(()=>{
            window.location.replace("/");
          },2000)
        }
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
        <div className="text-xl ">Enter data you want to store</div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-100 rounded-lg border border-black px-5 py-2"
            onChange={handleChange}
            name="name"
            value={inputHandler.name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your password"
            className="bg-gray-100 rounded-lg border border-black px-5 py-2"
            onChange={handleChange}
            name="pass"
            value={inputHandler.pass}
          />
        </div>
      </div>
      <div>
        <button
          className="text-xl text-white bg-gray-900 py-2 px-2 rounded-lg outline outline-cyan-100 "
          onClick={sendData}
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default HomePage;
