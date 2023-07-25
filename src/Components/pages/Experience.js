import React, { useState, useEffect, useCallback} from 'react'
import "./SnapScroll.css"
import {SCards} from "../SCards"
import {ECards} from '../ECards'
import {EdCards} from '../EdCards'

import MatrixRain from "../MatrixRain"


function Experience() {

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
                    <video autoPlay muted loop className="video">
                        <source src="/images/envid.mp4" type="video/mp4"/>
                    </video>
                        

                    </section>
                    <section>

                    <video autoPlay muted loop className="video">
                        <source src="/images/scienceBG.mp4" type="video/mp4"/>
                    </video>

                    </section>
                </div>
            
            </div>

            <div className='cardsindex'>
              {Card === 0 ? <SCards/> : Card === 1 ? <ECards/> : <EdCards onClick={onclick}/>}

            </div>


            

            
        </>
        
  )
}

export default Experience