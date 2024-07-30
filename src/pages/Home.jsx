import React from "react";
import MainWindow from "../components/MainWindow";
import NavBar from "../components/NavBar";
function Home() {
  return (
    <div className="flex bg-[#0d1219] ">
      <NavBar />
      <MainWindow />
    </div>
  );
}

export default Home;
