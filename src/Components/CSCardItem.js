import React from 'react'
import { Link } from 'react-router-dom'
import "./CSCards.css"

function CSCardItem(props) {
  return (
    <>
    
        <div className='cards__item'>
            <Link className='cards__item__link' to = {props.path}>

                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{/*props.text*/} ccardItem1</h5>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default CSCardItem