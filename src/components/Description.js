import React from "react";

const Description = (props) => {
  console.log(props);
  let movie = props.movies.find((el) => el.id == props.match.params.id);
  return (
    <div className="desc">
      <h1 className="desctitle">{movie.title}</h1>
      <h3 className="descyear">{movie.year}</h3>
      <img className="descimage" src={movie.posterURL} alt="" />
      <h2 className="descsubtitle">Description :</h2>
      <p>{movie.description}</p>
      <br />
      <h2 className="descsubtitle">Trailer :</h2>
      <br />
      <iframe
        width="900"
        height="506"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Description;
