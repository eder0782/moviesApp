import { ScrollView } from "react-native";
import { CardMovie } from "../../stylesBasics";
import { ContainerScroll } from "./HighMovie.style";
// import imagem from
const imagem = "./movie-2.png";

export default function HighMovie() {
  return (
    <ContainerScroll>
      <CardMovie source={require(imagem)} />
      <CardMovie source={require(imagem)} />
      <CardMovie source={require(imagem)} />
    </ContainerScroll>
  );
}
