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
                text = "This Website"
                label = "Website"
                desc = "A website created using React"

              />
              <CardItem2 
                text = "Condense"
                label = "Chrome Extension"
                desc = "A chrome extension to condense a websites links onto a single page"

              />
              
            </ul>
            <ul className='cards__itemsE'>
              <CardItem2 
                text = "Spacing"
                label = "Video Game"
                desc = "A videogame created using Unity and C#"

              />
              
            </ul>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default ECards;