import React, { useState, useEffect, useCallback} from 'react'
import "./SnapScroll.css"
import SCards from "../SCards"
import ECards from '../ECards'
import MatrixRain from "../MatrixRain"


function Experience() {

    const [Card, setCard] = useState(0);

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          
          if (window.scrollY >= window.innerHeight/2){
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
            {Card == 0 ? 
                <SCards/>
                :
                <ECards/>
            }

            <div className='container'>

                

                <div className='scrollable'>
                    <section className='section1'>
                        
                        <div className='snapCell-control'>
                            <MatrixRain/>
                            

                            
                            
                        </div>
                        
                        
                    </section>
                    <section >
                    <video autoPlay muted loop className="myVideo">
                        <source src="/images/envid.mp4" type="video/mp4"/>
                    </video>
                        

                    </section>
                    <section>

                    </section>
                </div>
            
            </div>
        </>
        
  )
}

export default Experience