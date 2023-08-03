import { ScrollView, View, Text } from "react-native";
import CardMovie from "../CardMovie";
import { ContainerScroll, TextNumber } from "./HighMovie.style";
import { ImageProps, Movie } from "../../@types/types";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
// import imagem from
const imagem = "./movie-2.png";

const dados: Movie[] = [
  {
    id: 1,
    title: "Homen Aranha",
    poster_path: require("./movie-2.png"),
    overview: "teste",
    vote_average: 30,
  },
  {
    id: 2,
    title: "Homen Aranha",
    poster_path: require("./movie-2.png"),
    overview: "teste",
    vote_average: 30,
  },
  {
    id: 3,
    title: "Homen Aranha",
    poster_path: require("./movie-2.png"),
    overview: "teste",
    vote_average: 30,
  },
  {
    id: 4,
    title: "Homen Aranha",
    poster_path: require("./movie-2.png"),
    overview: "teste",
    vote_average: 30,
  },
];

export default function HighMovie() {
  const imageSize: ImageProps = {
    height: 210,
    width: 144,
  };
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const response = await api.get("/trending/movie/day", {
      params: {
        page,
      },
    });
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setPage(page + 1);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <ContainerScroll>
      {discoveryMovies.map((item, ind) => (
        <View key={item.id} style={{ marginLeft: 20 }}>
          <CardMovie imageSize={imageSize} data={item} />
          <TextNumber>{ind + 1}</TextNumber>
        </View>
      ))}
    </ContainerScroll>
  );
}
