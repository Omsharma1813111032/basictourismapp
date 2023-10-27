import React, { useState } from 'react'
import CardDesign from './CardDesign'
import data from '../Data'
import "./Card.css"



const Card = () => {

  const [list,setList] = useState(data);

  function RemoveItem(id){

    const reloadAgain = () =>{
      window.location.reload();
    }

    const newList  = list.filter((dt)=>dt.id!==id);
    setList(newList);

    if(newList.length===0){
      document.querySelector('.errorMessage').innerHTML="List Is Empty!! <button onClick="+reloadAgain()+">Reload</button>  ";
    }
    // setList(newList);
  }


  function showItem(id){
    const newList2 = list.filter((dt)=>dt.id===id);
    setList(newList2)
  }


  return (
    <div className='card_frame'>
        <div className='row'>
          <p className='errorMessage'></p>
            {list.map((dt) => (
            <CardDesign  value={dt.info.length>10 ? dt.info.substring(0,30)+'...':dt.info}   key={dt.id} info={dt.info} img={dt.image}  name={dt.name} price={dt.price} evnt={()=>RemoveItem(dt.id)}  evnt2={()=>showItem(dt.id)}  />
        ))}
        </div>
    </div>
  )
}

export default Card