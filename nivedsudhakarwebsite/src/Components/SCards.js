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
                text = "This Website"
                label = "Website"
                desc = "A website created using React"

              />
              <CardItem1
                text = "Condense"
                label = "Chrome Extension"
                desc = "A chrome extension to condense a websites links onto a single page"

              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem1 
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

export default SCards;