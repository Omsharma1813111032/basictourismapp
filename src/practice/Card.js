import React from 'react'
import CardDesign from './CardDesign'
import data from '../Data'
import "./Card.css"

const Card = () => {
  return (
    <div className='card_frame'>
        <div className='row'>
            {data.map((dt, index) => (
            <CardDesign key={dt.id} info={dt.info} img={dt.image}  name={dt.name} price={dt.price}/>
        ))}


        </div>
    </div>
  )
}

export default Card