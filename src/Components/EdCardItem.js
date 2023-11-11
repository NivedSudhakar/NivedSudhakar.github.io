import React from 'react'
import { Link } from 'react-router-dom'
import "./EdCards.css"

function EdCardItem(props) {

  const details = props.details

  console.log(details)

  const listItems =  details? details.map((detail) =>
    <li key={detail.toString()}>
      {detail}
    </li>
  ) : null ;


  return (
    <>

        <div className='cards__itemEd'>
            <Link className='cards__item__linkEd' to = {props.path}>
                
                <div className='cards__item__infoEd'>
                    <h5 className='cards__item__title_textEd'>{props.text1}</h5>
                    <ul className='cards__item__textEd'>{listItems}</ul>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default EdCardItem