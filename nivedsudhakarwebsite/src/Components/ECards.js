import React from 'react'
import CardItem2 from './CardItem2'
import "./Cards2.css"

function ECards(props) {
  return (
    <div className='cardsnstuffE'>
      <h1>Environmental Science</h1>
      <div className='cardsE'>
        <div className='cards__containerE'>
          <div className="cards__wrapperE">
            <ul className='cards__itemsE'>
              <CardItem2
                text = "30+ Volunteer Hours at Tree Nursery"


              />
              <CardItem2 
                text = "Software team member of $100M XPRIZE Carbon Quest Competition"


              />
              
            </ul>
            <ul className='cards__itemsE'>
              <CardItem2 
                text = "Coming Soon"
                

              />
              
            </ul>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default ECards;