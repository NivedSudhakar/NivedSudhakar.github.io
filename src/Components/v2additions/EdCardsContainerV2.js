import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardItem3 from "./EdCardItemV2";
import "./EdCardsV2.css";

export const EdCardsContainerV2 = ({ onClick }) => {
  const [Card, setCard] = useState(0);

  const VCCardsText = [
    "AP Computer Science A - 5",
    "AP Statistics",
    "AP Physics 1",
    "AP Human Geography",
    "AP Chemistry",
  ];
  const MCCardsText = [
    "Introduction to Data Structures with Java",
    "Robotics and Embedded Systems",
  ];

  return (
    <div className="cardsnstuff">
      <h1>Education</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <div
                className="clicksection"
                onClick={() => {
                  setCard(0);
                }}
              >
                <CardItem3 text1="Valley Christian High School" />
              </div>

              <div
                className="clicksection"
                onClick={() => {
                  setCard(1);
                }}
              >
                <CardItem3 text1="Mission College" />
              </div>
            </ul>
            <ul className="cards__items">
              {Card === 0 ? (
                <CardItem3
                  text1="4.78 GPA"
                  text2="XPRIZE Carbon Software Team"
                  text3="Courses: "
                  details1={VCCardsText}
                />
              ) : (
                <CardItem3
                  text1="Pursuing AS in Computer Information Systems"
                  text2="Mission College Honors Program"
                  text3="Courses: "
                  details1={MCCardsText}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdCardsContainerV2;
