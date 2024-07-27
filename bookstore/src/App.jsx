import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Paid from "./courses/Paid";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Paid />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
