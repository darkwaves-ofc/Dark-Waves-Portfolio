import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import "./utils/fontAwesomeSetup.js";
import "./utils/FontLoader";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <>
      <div className="w-full position-relative flex-col-ali-center">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Define other routes as needed */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
