import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}.
                </Card.Text>
                <Card.Text>
                    ${props.price}.99
                </Card.Text>
                <div className='text-center'>
                    <Link className="btn btn-primary position-absolute end-10" to={props.identifier}>Details</Link>
                </div>

            </Card.Body>
        </Card>
    )
}

export default Product