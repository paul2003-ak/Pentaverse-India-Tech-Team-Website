import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/main page/Mainpage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
