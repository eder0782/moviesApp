import { ScrollView, View, Text } from "react-native";
import { CardMovie } from "../../styles";
import { ContainerScroll, TextNumber } from "./HighMovie.style";
// import imagem from
const imagem = "./movie-2.png";

export default function HighMovie() {
  return (
    <ContainerScroll>
      <View>
        <CardMovie source={require(imagem)} />
        <TextNumber>1</TextNumber>
      </View>
      <View>
        <CardMovie source={require(imagem)} />
        <TextNumber>2</TextNumber>
      </View>
      <View>
        <CardMovie source={require(imagem)} />
        <TextNumber>3</TextNumber>
      </View>
    </ContainerScroll>
  );
}
