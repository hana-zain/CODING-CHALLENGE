import { useState } from "react";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Add from "./components/Add";
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />



      </Routes>
    </>
  );
}

export default App;
