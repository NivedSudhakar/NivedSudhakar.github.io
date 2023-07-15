import React from 'react'
import "../SnapScroll.css"
import ExperienceCards from "../ExperienceCards"
import MatrixRain from "../MatrixRain"

function Experience() {
  return (
        <>
            <div className='cardsnstuff'>
                    <h1>Computer Science</h1>
                    <ExperienceCards/>
            </div>

            <div className='container'>

                

                <div className='scrollable'>
                    <section className='section1'>
                        
                        <div className='snapCell-control'>
                            <MatrixRain/>
                            

                            
                            
                        </div>
                        
                        
                    </section>
                    <section >

                    </section>
                    <section>

                    </section>
                </div>
            
            </div>
        </>
        
  )
}

export default Experience