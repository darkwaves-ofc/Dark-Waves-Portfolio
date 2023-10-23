import React from "react";
import "./MainContent.css";
import { mainData } from "../../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-reveal";

export default function MainContent() {
  return (
    <div className="main-content flex-row-center">
      <Fade left>
        <div className="details__section">
          <div className="title font-xl font-weight-700">{mainData.title}</div>
          <div className="description m-t-2">{mainData.description}</div>
          <div className="contact__icon flex-row-bet w-40 m-t-3 text-dark">
            {mainData.social_media.map((e, index) => (
              <a href={e.link} title={e.name} key={index}>
                <FontAwesomeIcon
                  className="font-md"
                  icon={`fa-brands fa-${e.icon}`}
                />
              </a>
            ))}
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="logo__section">
          <img
            src={mainData.logo}
            alt="Dark Waves Owner"
            className="logo__portfolio"
          />
        </div>
      </Fade>
    </div>
  );
}
