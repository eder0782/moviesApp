import { ScrollView, View, Text } from "react-native";
import CardMovie from "../CardMovie";
import { ContainerScroll, TextNumber } from "./HighMovie.style";
import { ImageProps, Movie } from "../../@types/types";
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
  return (
    <ContainerScroll>
      {dados.map((item) => (
        <View>
          <CardMovie imageSize={imageSize} data={item} />
        </View>
      ))}
    </ContainerScroll>
  );
}
