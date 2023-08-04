import { ImageMovie } from "../../../styles";
import { ImageProps, Movie } from "../../../@types/types";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { memo } from "react";
import { useContext } from "react";
import { MovieContext } from "../../../utilites/context/MovieContext";

type IProps = {
  imageSize: ImageProps;
  data: Movie;
};

const CardMovie: React.FC<IProps> = ({ data, imageSize }) => {
  const route = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        // setMovie(data);
        route.push("/details");
      }}
    >
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
