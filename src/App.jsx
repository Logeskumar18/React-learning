import "./styles.css";
import Navbar from "./componants/Navbar";
import Home from "./componants/Home";
import RegularFetch from "./componants/RegularFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegularFetch" element={<RegularFetch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
