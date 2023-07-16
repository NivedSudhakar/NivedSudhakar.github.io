import React from 'react'
import { Link } from 'react-router-dom'
import "./FlippableCards.css"

function FlippableCardItem(props) {
  return (
    <>
    <li className='fcards__item'>
        <div className='fcard__item__front'>
            <Link className='fcards__item__link' to = {props.path}>
                <figure className='fcards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt={props.src} className='fcards__item__img'/>
                </figure>
                <div className='fcards__item__info'>
                    <h5 className='fcards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </div>
        <div className='fcard__item__back'>
            <p>{props.desc}</p>
        </div>
    </li>
</>
  )
}

export default FlippableCardItem;