import React from "react";
import AddClient from "../components/AddClient";
import Products from "../components/Products";
import Clients from "../components/Clients";
import AddProject from "../components/AddProject";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
        <AddProject/>
      </div>

      <Products />
      <hr/>
      <Clients />
    </>
  );
};

export default Home;
