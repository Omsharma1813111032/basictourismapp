import React from 'react'
import "./CardDesign.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

const CardDesign = (props) => {
    return (
        <div className='col-sm-4' style={{'padding':'20px'}}>
                <Card style={{ width: '18rem' }} className='mx-auto' key={props.id}>
                    <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                                <Card.Text limit={10}>
                                    {props.value}
                                    <br/>
                                    <small className='price' > <span className='text-success'> $ </span>  <span className='text-danger'> {props.price} </span> </small>
                                </Card.Text>

                                <ButtonGroup className='text-center pt-2 mx-auto'>
                                    <Button variant="danger" onClick={props.evnt} >Not Interested</Button>
                                    <br />
                                    <Button variant="warning" size="small" onClick={props.evnt2} >Interested</Button>
                                </ButtonGroup>
                    </Card.Body>
                </Card>
        </div>
  )
}
export default CardDesign;