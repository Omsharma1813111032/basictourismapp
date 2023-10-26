import React from 'react'
import "./CardDesign.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardDesign = (props) => {

    return (
        <div className='col-sm-4'>
            
                <Card style={{ width: '18rem' }} key={props.id}>
                    <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                    {props.info} <br/>
                                    <small className='price' > <span className='text-success'> $ </span>  <span className='text-danger'> {props.price} </span> </small>
                                </Card.Text>
                        <Button variant="danger">Not Interested</Button>
                    </Card.Body>
                </Card>
        </div>




  )
}

export default CardDesign;
