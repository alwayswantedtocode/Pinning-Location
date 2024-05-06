import React from "react";
import Form from "../component/Inputs/Form";
import Googlemap from "../component/googlemaps/googlemap";
import Navbar from "../component/Navbar/navbar";
import { FiUser } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <header className="w-[100%]  h-[5rem] flex items-center justify-center z-30 shadow-xl font-negative">
        <Navbar />
        <div className="flex gap-[10px] items-center border-2 h-[100%] text-xl px-[1rem] font-semibold bg-[#9593B9] cursor-pointer">
          <FiUser />
          <span className="">SignIn</span>
        </div>
      </header>
      <main className="lg:flex flex-row font-sans">
        <Form />

        <Googlemap />
      </main>
    </>
  );
};

export default Home;
