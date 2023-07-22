import React from 'react'
import CardItem3 from './CardItem3'
import "./Cards3.css"

function EdCards(props) {
  return (
    <div className='cardsnstuffEd'>
      <h1>Education</h1>
      <div className='cardsEd'>
        <div className='cards__containerEd'>
          <div className="cards__wrapperEd">
            <ul className='cards__itemsEd'>
              <CardItem3
                text1 = "4.57 Valley Christian High School GPA"


              />
              <CardItem3 
                text1 = "4.00 Mission College GPA"


              />
              
            </ul>
            <ul className='cards__itemsEd'>
              <CardItem3 
                text1 = "APs taken in high school: "
                text2 = "AP Computer Science A - 5, AP Statistics, AP Computer Science Principles, AP Human Geography, AP Chemistry"
                

              />
              
            </ul>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default EdCards;