import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards2.css"

function CardItem2(props) {
  return (
    <>
    
        <div className='cards__itemE'>
            <Link className='cards__item__linkE' to = {props.path}>
                
                <div className='cards__item__infoE'>
                    <h5 className='cards__item__textE'>{props.text}</h5>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default CardItem2