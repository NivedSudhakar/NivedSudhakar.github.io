import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards1.css"

function CardItem1(props) {
  return (
    <>
    
        <div className='cards__item'>
            <Link className='cards__item__link' to = {props.path}>
                
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default CardItem1