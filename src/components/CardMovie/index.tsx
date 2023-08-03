import { ImageMovie } from "../../styles";
import { ImageProps, Movie } from "../../@types/types";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { memo } from "react";
type IProps = {
  imageSize: ImageProps;
  data: Movie;
};

const imagem = require("./movie-2.png");
const CardMovie: React.FC<IProps> = ({ data, imageSize }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => alert("clicou")}>
      <ImageMovie
        style={{ width: imageSize.width, height: imageSize.height }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
};

export default memo(CardMovie);
