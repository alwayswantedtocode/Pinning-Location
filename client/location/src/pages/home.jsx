import React from "react";
import Form from "../Form/Form";
import Googlemap from "../component/googlemaps/googlemap";
import Navbar from "../component/Navbar/navbar";

const Home = () => {
  return (
    <>
      <main className="lg:flex flex-row font-sans h-[100vh]">
        <Form />

        <Googlemap />
      </main>
    </>
  );
};

export default Home;
