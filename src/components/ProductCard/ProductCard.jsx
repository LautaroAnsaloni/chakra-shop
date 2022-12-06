import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, title, image}) => {

    const navigate = useNavigate();
    const redirectDetails = () => {
        navigate(`/details/${id}`)
    }
    return (
        <Card className="text-center mx-2" border="warning" bg="dark" text="light" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image} />
          <Card.Text>
          </Card.Text>
          <Button variant="warning" onClick={redirectDetails}>Ver más</Button>
        </Card.Body>
      </Card>
    );
  };
  
  export default ProductCard;


  
