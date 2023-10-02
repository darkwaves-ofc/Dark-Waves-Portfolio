import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import "./utils/fontAwesomeSetup.js";
import "./utils/FontLoader";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
