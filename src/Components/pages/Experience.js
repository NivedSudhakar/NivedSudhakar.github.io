import React, { useState, useEffect, useCallback, useRef} from 'react'
import "./SnapScroll.css"
import {CSCardsContainer} from "../CSCardsContainer"
import {ECards} from '../ECards'
import {EdCards} from '../EdCards'

import MatrixRain from "../MatrixRain"


function Experience() {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
}

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    
}
  })
  

    const [Card, setCard] = useState(0);

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          
          if (window.scrollY >= window.innerHeight * 1.5){
            setCard(2);
          }

          else if (window.scrollY >= window.innerHeight/2){
            setCard(1);

          } 
          else {
            setCard(0);
          }
        }
      );
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
            

            <div className='container'>

                

                <div className='scrollable'>
                    
                    <section className='section1'>
                        
                        <div className='snapCell-control'>
                            <MatrixRain/>
                            

                            
                            
                        </div>
                        
                        
                    </section>
                    <section >
                    <video className="video" ref={videoRef} loop autoPlay muted playsInline >
                        <source src="/images/envid.mp4" type="video/mp4"/>
                    </video>
                        

                    </section>
                    <section>

                    <video className="video" ref={videoRef} loop autoPlay muted playsInline onCanPlay={() => setPlayBack()}>
                        <source src="/images/scienceBG.mp4" type="video/mp4"/>
                    </video>

                    </section>
                </div>
            
            </div>

            <div className='cardsindex'>
              {Card === 0 ? <CSCardsContainer/> : Card === 1 ? <ECards/> : <EdCards onClick={onclick}/>}

            </div>


            

            
        </>
        
  )
}

export default Experience