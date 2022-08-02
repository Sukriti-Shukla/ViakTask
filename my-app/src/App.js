import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Image from "./components/Image";
import Load from "./components/Load";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const url =
  "https://gateway.pinata.cloud/ipfs/QmNXUTHomuVcwTWfwCkTrBj3EWiRbfv5N9Nhrd2qaJVAJ2";

function App() {
  const [img, setImg] = useState();
  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Image />} />
          <Route path="images" element={<Load />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
