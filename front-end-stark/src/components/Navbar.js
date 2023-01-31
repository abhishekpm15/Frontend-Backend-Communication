import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
      <div className="h-12 w-screen bg-gray-800">
        <div className="list-none flex justify-start space-x-5 px-5 py-3 text-white text-xl cursor-pointer">
        <Link to="/"><li className="hover:bg-white px-2 rounded-lg transition hover:translate-x-2 hover:text-black">HOME</li></Link>
        <Link to="/contact"><li className="hover:bg-white px-2 rounded-lg transition hover:translate-x-2 hover:text-black "> CONTACT</li></Link>
        <Link to="/documentation"><li className="hover:bg-white px-2 rounded-lg transition hover:translate-x-2 hover:text-black">DOCS</li></Link>
        <Link to="/about"><li className="hover:bg-white px-2 rounded-lg transition hover:translate-x-2 hover:text-black"> ABOUT</li></Link>
        <Link to="/data"><li className="hover:bg-white px-2 rounded-lg transition hover:translate-x-2 hover:text-black"> DATAS</li></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
