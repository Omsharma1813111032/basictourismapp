import React, { useState } from 'react'
import CardDesign from './CardDesign'
import data from '../Data'
import "./Card.css"



const Card = () => {

  const [list,setList] = useState(data);

  function RemoveItem(id){
    // console.log(id)
    const newList  = list.filter((dt)=>dt.id!==id);
    setList(newList);
  }




  return (
    <div className='card_frame'>
        <div className='row'>
            {list.map((dt) => (
            <CardDesign key={dt.id} info={dt.info} img={dt.image}  name={dt.name} price={dt.price} evnt={()=>RemoveItem(dt.id)} />
        ))}
        </div>
    </div>
  )
}

export default Card