import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataPage = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([{}]);

  const handleEdit = (index, id) => {
    axios
      .get(`https://backend-app-production-96e7.up.railway.app/get-data/${id}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        navigate("/edit", { state: { data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (index, id) => {
    console.log(index);
    axios
      .delete(`https://backend-app-production-96e7.up.railway.app/delete-data/${id}`)
      .then((response) => {
        console.log(response.data);
          toast.error("Successfully deleted the data !");
          window.location.replace("/data");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    axios.get("https://backend-app-production-96e7.up.railway.app/get-data").then((response) => {
      console.log(response.data);
      if(response.data.length === 0)
        toast.error("No data found !");
        else
        setDatas(response.data);
    });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex justify-center items-center">
      <table>
        <tr className="flex space-x-14 mt-10 ml-10 text-2xl">
          <thead>{datas[0]?.name ? "SNo" : ""}</thead>
          <thead>{datas[0]?.name ? "Name" : ""}</thead>
          <thead>{datas[0]?.name ? "Password" : ""}</thead>
          <thead>{datas[0]?.name ? "Options" : ""}</thead>
        </tr>
        {datas ? (
          datas.map((data, index) => {
            return (
              <div className="mt-3 ml-10">
                <div className="text-xl">
                  <tbody>
                    <tr className="flex space-x-14">
                      <td>{data.name ? index + 1 : ""}</td>
                      <td>{data.name}</td>
                      <td>{data.pass}</td>
                      <td>
                        {data.name ? (
                          <div className="flex space-x-3">
                            <button
                              className="text-xl text-white bg-blue-600 py-2 px-2 rounded-lg outline outline-cyan-100 "
                              onClick={() => {
                                handleEdit(index + 1, data._id);
                              }}
                            >
                              EDIT
                            </button>
                            <button
                              className="text-xl text-white bg-red-600 py-2 px-2 rounded-lg outline outline-cyan-100 "
                              onClick={() => {
                                handleDelete(index + 1, data._id);
                              }}
                            >
                              DELETE
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        <button
          className="text-xl text-white bg-gray-900 py-2 px-2 rounded-lg outline outline-cyan-100 mt-[10%]"
          onClick={getData}
        >
          GET DATA
        </button>
      </table>
      </div>
    </div>
  );
};

export default DataPage;
