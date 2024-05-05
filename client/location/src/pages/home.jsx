import React from "react";
import Form from "../component/Inputs/Form";
import Googlemap from "../component/googlemaps/googlemap";
import Navbar from "../component/Navbar/navbar";

const Home = () => {
  return (
    <>
      <header className="w-[100%] p-[1rem] h-[4.5rem] flex items-center justify-center font-slab shadow-xl">
        <Navbar />
      </header>
      <main className="flex flex-row  bg-yellow-400 font-sans">
        <Form />
        <Googlemap />
      </main>
    </>
  );
};

export default Home;
