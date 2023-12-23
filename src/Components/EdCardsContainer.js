import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardItem3 from "./EdCardItem";
import "./EdCards.css";

export const EdCardsContainer = ({ onClick }) => {
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
  const CertCardsText = ["Harvardx - CS50x", "GTx - Linear Algebra I"];

  return (
    <div className="cardsnstuffEd">
      <h1>Education</h1>
      <div className="cardsEd">
        <div className="cards__containerEd">
          <div className="cards__wrapperEd">
            <ul className="cards__itemsEd">
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
            <ul className="cards__itemsEd">
              {Card === 0 ? (
                <CardItem3
                  text1="APs taken in high school: "
                  details={VCCardsText}
                />
              ) : (
                <CardItem3
                  text1="Mission College Courses: "
                  details={MCCardsText}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdCardsContainer;
