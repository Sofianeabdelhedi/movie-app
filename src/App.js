import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesList from "./components/MoviesList";
import { movielist } from "./data";
import HeaderApp from "./components/HeaderApp";

function App() {
  const [movies, setMovies] = useState(movielist);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);

  const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);

  return (
    <div className="app">
      <HeaderApp
        rating={rating}
        text={text}
        handleText={handleText}
        handleRating={handleRating}
        handleAdd={handleAdd}
      />
      <MoviesList
        movies={movies.filter(
          (el) =>
            el.title.toLowerCase().includes(text.toLowerCase()) &&
            el.rating >= rating
        )}
      />
    </div>
  );
}

export default App;
