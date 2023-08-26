import { createContext, FC, useState } from "react";
// import { Movie } from "../../@types/types";

type GenreMovieType = {
  id: number;
  name: string;
};

type GenreMovieContextType = {
  genreMovie: GenreMovieType[];
  setGenreMovie: React.Dispatch<React.SetStateAction<GenreMovieType[]>>;
};

const GenreMovieContext = createContext<GenreMovieContextType>({
  genreMovie: [] as GenreMovieType[],
  setGenreMovie: () => {},
});

interface IGenMovieProvider {
  children: JSX.Element;
}

const GenreMovieProvider: FC<IGenMovieProvider> = ({ children }) => {
  const [genreMovie, setGenreMovie] = useState<GenreMovieType[]>(
    [] as GenreMovieType[]
  );

  return (
    <GenreMovieContext.Provider value={{ genreMovie, setGenreMovie }}>
      {children}
    </GenreMovieContext.Provider>
  );
};

export { GenreMovieContext, GenreMovieProvider };
