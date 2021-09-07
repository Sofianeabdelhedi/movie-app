import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
  return (
    <div className="movieCard">
      <Card>
        <Card.Img variant="top" src={movies.posterURL} className="posterUrl" />
        <Card.Body>
          <Card.Title>
            <strong>{movies.title}</strong>
          </Card.Title>
          <Card.Text className="cardtext">
            {movies.year}
            <br />
            <StarRating rating={movies.rating} />
            <br />
          </Card.Text>
          <Link to={`/movie/${movies.id}`}>
            <Button variant="primary btn">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
