import React from 'react'
import { Link } from 'react-router-dom'
import "./FlippableCards.css"

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <div className='card__item__front'>
                <Link className='cards__item__link' to = {props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt={props.src} className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </div>
            <div className='card__item__back'>
                <p>{props.desc}</p>
            </div>
        </li>
    </>
  )
}

export default CardItem;