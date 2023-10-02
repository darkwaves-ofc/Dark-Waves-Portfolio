import React from "react";
import "./Home.css";
import MainContent from "../../components/Home/MainContent/MainContent";
import AboutCard from "../../components/Home/AboutCard/AboutCard";
import Projects from "../../components/Home/Projects/Projects";

export default function Home() {
  return (
    <div className="home flex-col w-60 m-auto">
      <MainContent />
      <AboutCard />
      <Projects />
    </div>
  );
}
