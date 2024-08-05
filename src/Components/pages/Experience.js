import React, { useState, useEffect, useCallback, useRef } from "react";
import "./SnapScroll.css";
import { CSCardsContainer } from "../CSCardsContainer";
import { EnvCardsContainer } from "../EnvCardsContainer";
import { EdCardsContainerV2 } from "../v2additions/EdCardsContainerV2";

import MatrixRain from "../MatrixRain";

function Experience() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    document.body.style.overflow = "hidden";

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "scroll";
    };
  });


  return (
    <>
      
      <div className="cardsindex">
        <EdCardsContainerV2 onClick={onclick} />
      </div>
    </>
  );
}

export default Experience;
