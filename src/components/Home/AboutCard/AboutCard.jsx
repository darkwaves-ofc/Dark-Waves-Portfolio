import React from "react";
import { mainData } from "../../../data/data";
import "./AboutCard.css";

export default function AboutCard() {
  return (
    <div className="main__about_content flex-row-center g-5 h-full m-auto">
      <div className="image__container position-relative">
        <img
          src={mainData.aboutPic}
          alt="About Dark Waves"
          className="about__image rounded-lg"
        />
        <img
          src={mainData.siteLogo}
          alt=""
          className="about__sub_logo position-absolute w-30 rounded-full"
        />
      </div>
      <div className="content__container">
        <span className="title__intro text-primary font-bold">About Us</span>
        <h2 className="m-b-2">{mainData.aboutTitle}</h2>
        <span>{mainData.about}</span>
      </div>
    </div>
  );
}
