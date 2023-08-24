import { render } from '@testing-library/react';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import CardItem3 from './CardItem3'
import "./Cards3.css"





export const EdCards = ({onClick}) => {
  const [Card, setCard] = useState(0);

  

 
  return (
    <div className='cardsnstuffEd'>
      <h1>Education</h1>
      <div className='cardsEd'>
        <div className='cards__containerEd'>
          <div className="cards__wrapperEd">
            <ul className='cards__itemsEd'>


              <div className='clicksection' onClick={() => {setCard(0)}}>
                <CardItem3 onClick={() => {console.log("amongus")}}
                  text1 = "4.57 Valley Christian High School GPA"
                />
              </div>
              

              <div className='clicksection' onClick={() => {setCard(1)}}>
                <CardItem3 
                  text1 = "4.00 Mission College GPA"
                />
              </div>

              <div className='clicksection' onClick={() => {setCard(2)}}>
                <CardItem3 
                  text1 = "Certifications"
                />
              </div>
              
              
            </ul>
            <ul className='cards__itemsEd'>
              { Card === 0 ? <CardItem3 
                text1 = "APs taken in high school: "
                text2 = "AP Computer Science A - 5, AP Statistics, AP Physics 1, AP Human Geography, AP Chemistry"
                

              /> : Card === 1 ? <CardItem3
              text1 = "Courses taken at Mission College: "
              text2 = "Robotics and Embedded Systems, Introduction to C"
              

            /> :
            <CardItem3 
              text1 = "CS50x from Harvard"
              text2 = "Linear Algebra I from Georgia Tech"
              

            />
            }
              
            </ul>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default EdCards;