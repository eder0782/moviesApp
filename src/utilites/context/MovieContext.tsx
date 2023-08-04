import { createContext, FC, useState } from "react";
import { Movie } from "../../@types/types";

type MovieContextType = {
  movie: Movie;
  setMovie: React.Dispatch<React.SetStateAction<Movie>>;
};

const MovieContext = createContext<MovieContextType>({
  movie: {} as Movie,
  setMovie: () => {},
});

interface IMovieProvider {
  children: JSX.Element;
}

const MovieProvider: FC<IMovieProvider> = ({ children }) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
