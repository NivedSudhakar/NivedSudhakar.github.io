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

  /*const [Card, setCard] = useState(0);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;

    if (window.scrollY >= window.innerHeight * 1.5) {
      setCard(2);
    } else if (window.scrollY >= window.innerHeight / 2) {
      setCard(1);
    } else {
      setCard(0);
    }
  });
  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.7;
  };

  return (
    <>
      <div className="container">
        <div className="scrollable">
          <section className="section1">
            <div className="snapCell-control">
              <MatrixRain />
            </div>
          </section>
          <section>
            <video
              className="video"
              ref={videoRef}
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/images/envid.mp4" type="video/mp4" />
            </video>
          </section>
          <section>
            <video
              className="video"
              ref={videoRef}
              loop
              autoPlay
              muted
              playsInline
              onCanPlay={() => setPlayBack()}
            >
              <source src="/images/scienceBG.mp4" type="video/mp4" />
            </video>
          </section>
        </div>
      </div>

      <div className="cardsindex">
        {Card === 0 ? (
          <CSCardsContainer />
        ) : Card === 1 ? (
          <EnvCardsContainer />
        ) : (
          <EdCardsContainerV2 onClick={onclick} />
        )}
      </div>
    </>
  );
}*/

  return (
    <>
      <MatrixRain />
      <div className="cardsindex">
        <EdCardsContainerV2 onClick={onclick} />
      </div>
    </>
  );
}

export default Experience;
