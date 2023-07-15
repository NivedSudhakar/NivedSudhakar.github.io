import React from 'react'
import CardItem from './CardItem1'
import "./Cards1.css"

function ExperienceCards(props) {
  return (
    <div className='cards'>
        <div className='cards__container'>
          <div className="cards__wrapper">
            <ul className='cards__items'>
              <CardItem
                text = "This Website"
                label = "Website"
                desc = "A website created using React"

              />
              <CardItem 
                text = "Condense"
                label = "Chrome Extension"
                desc = "A chrome extension to condense a websites links onto a single page"

              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem 
                text = "Spacing"
                label = "Video Game"
                desc = "A videogame created using Unity and C#"

              />
              
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ExperienceCards;