import React from 'react'
import CardItem from './CardItem'
import "./FlippableCards.css"

function ProjectCards() {
  return (
    <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
          <div className="cards__wrapper">
            <ul className='cards__items'>
              <CardItem 
                src='/images/project-website.jpg'
                text = "This Website"
                label = "Website"
                desc = "A website created using React"

              />
              <CardItem 
                src='/images/condense2.jpg'
                text = "Condense"
                label = "Chrome Extension"
                desc = "A chrome extension to condense a websites links onto a single page"

              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src='/images/ship.png'
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

export default ProjectCards;