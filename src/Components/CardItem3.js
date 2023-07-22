import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards3.css"

function CardItem3(props) {
  return (
    <>
    
        <div className='cards__itemEd'>
            <Link className='cards__item__linkEd' to = {props.path}>
                
                <div className='cards__item__infoEd'>
                    <h5 className='cards__item__textEd'>{props.text1}</h5>
                    <h5 className='cards__item__textEd'>{props.text2}</h5>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default CardItem3