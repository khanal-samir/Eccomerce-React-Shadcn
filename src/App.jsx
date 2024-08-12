import React from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col flex-wrap ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
