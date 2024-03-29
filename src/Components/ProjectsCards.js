import React from 'react'
import FlippableCardItem from './FlippableCardItem'
import "./FlippableCards.css"

function ProjectCards() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className='fcards'>
        <h1>Projects</h1>
        <div className='fcards__container'>
          <div className="fcards__wrapper">
            <ul className='fcards__items' onClick={() => openInNewTab("https://www.youtube.com/watch?v=OClBandvQnE")}>
              <FlippableCardItem
                src='/images/ReactionWheel.jpeg'
                text = "Self Balancing Reaction Wheel"
                label = "Robotics"
                desc = "An Inverted Pendulum that uses a Reaction Wheel to balance itself"

              />
            </ul>
            <ul className='fcards__items'>
              <FlippableCardItem 
                src='/images/project-website.jpg'
                text = "This Website"
                label = "Website"
                desc = "A website created using React"

              />
              <FlippableCardItem 
                src='/images/condense2.jpg'
                text = "Condense"
                label = "Chrome Extension"
                desc = "A chrome extension to condense a websites links onto a single page"

              />
              
            </ul>
            <ul className='fcards__items'>
              <FlippableCardItem
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