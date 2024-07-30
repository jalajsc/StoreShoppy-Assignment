import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Production() {
  return (
    <div>
      <NavBar />
      <div className="text-white font-bold absolute right-0 w-[85%] bg-[#0d1219] h-screen flex-col">
        <div className="text-5xl">This Page is not yet produced.</div>
        <div className="bg-blue-500 border-2 border-white rounded-lg mt-20 mx-[42%] p-4 text-xl">
          <Link to="/">Go back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Production;
