import React from "react";
import { Link } from "react-router-dom";
import "./EdCardsV2.css";

function EdCardItemV2(props) {
  const details1 = props.details1;

  const listItems1 = details1
    ? details1.map((detail) => <li key={detail.toString()}>{detail}</li>)
    : null;

  return (
    <>
      <div className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <div className="cards__item__info">
            <h5 className="cards__item__title_text">{props.text1}</h5>

            <h5 className="cards__item__title_text">{props.text2}</h5>

            <h5 className="cards__item__title_text">{props.text3}</h5>
            <ul className="cards__item__text">{listItems1}</ul>
          </div>
        </Link>
      </div>
    </>
  );
}

export default EdCardItemV2;
