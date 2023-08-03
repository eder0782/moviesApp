import { createContext, FC, useState } from "react";
import { Movie } from "../../@types/types";

type FinancialRecordsContextType = {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const FinancialRecordsContext = createContext<FinancialRecordsContextType>({
  movies: [] as Movie[],
  setMovies: () => {},
});

interface IMoviesProvider {
  children: JSX.Element;
}

const FinancialRecordsProvider: FC<IMoviesProvider> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

  return (
    <FinancialRecordsContext.Provider value={{ movies, setMovies }}>
      {children}
    </FinancialRecordsContext.Provider>
  );
};

export { FinancialRecordsContext, FinancialRecordsProvider };
