import { useContext } from "react";

import { MovieContext } from "../../../../../utilites/context/MovieContext";
import { TextAbaut, Container } from "./AbautMovie.style";

const AbautMovie: React.FC = () => {
  const { movie } = useContext(MovieContext);
  return (
    <Container>
      <TextAbaut>{movie.overview}</TextAbaut>
    </Container>
  );
};

export default AbautMovie;
