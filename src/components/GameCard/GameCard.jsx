import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function GameCard(props) {
  return (
    <Card style={{ width: '18rem', height: '39rem'}}>
      <Card.Img variant="top" src={props.game.posterPath} style={{height: '36rem'}} />
      <Card.Body>
        <Card.Title>{props.game.title}</Card.Title>
        <Card.Text>
          Price: {props.game.price}
        </Card.Text>
        <Link to={`/games/${props.game.title}`}> 
          <Button variant="primary">See Game Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}