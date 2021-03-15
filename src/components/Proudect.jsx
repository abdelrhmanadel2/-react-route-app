import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const proudect = ({item}) => {
    console.log(item)
    return (
        <div className="col-12 col-md-6  col-lg-4 h-100 py-3">
        <Card className="bg-transparent">
           <Link to={`/proudect/${item.id}`} className="img-bucket">
               
        <Card.Img className="img-fluid" variant="top" src={item.image} /></Link> 
        <Card.Body>
          <Card.Title class="card-titel" >{item.title}</Card.Title>
          <Card.Text>
          {item.description}
          </Card.Text>
          <Button variant="primary">Views</Button>
        </Card.Body>
      </Card></div>
    )
}
export default proudect;