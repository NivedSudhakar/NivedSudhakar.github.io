import React from 'react'
import CardItem1 from './CardItem1'
import "./Cards1.css"

function SCards(props) {
  return (
    <div className='cardsnstuff'>
      <h1>Computer Science</h1>
      <div className='cards'>
        <div className='cards__container'>
          <div className="cards__wrapper">
            <ul className='cards__items'>
              <CardItem1
                text = "Pursuing AS in Computer Information Systems"

              />
              <CardItem1
                text = "Harvard CS50X Certification, Scientific Computing with Python Certification"

              />
              
              
            </ul>
            <ul className='cards__items'>
              <CardItem1 
                text = "Using my knowledge of various programming languages and frameworks, I have made several projects including games, websites, and apps which are visible in the projects tab. Additionally, I have taken community college classes in Computer Information Systems along with AP Computer Science A, the latter of which I recieved a 5 in."


              />
              
            </ul>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default SCards;