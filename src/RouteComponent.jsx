import React from "react";
import { BrowserRouter, Routes,Route } from "react-router";
import App from "./App";
import About from "./About";
import Service from "./Service";
import Profile from "./Profile";

const RouteComponent = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/profile" element={<Profile/>}/>


    </Routes>
  </BrowserRouter>
};

export default RouteComponent;
