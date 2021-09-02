import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";

const MovieCard = ({ movies }) => {
  console.log(movies);
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
            {movies.description}
            <br />
          </Card.Text>
          <Button variant="primary btn">Watch it</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
