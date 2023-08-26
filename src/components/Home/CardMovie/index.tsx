import { ImageMovie } from "../../../styles";
import { ImageProps, Movie } from "../../../@types/types";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { memo } from "react";
import { useContext } from "react";
import { MovieContext } from "../../../utilites/context/MovieContext";
import { api } from "../../../services/api";

type IProps = {
  imageSize: ImageProps;
  data: Movie;
};

const CardMovie: React.FC<IProps> = ({ data, imageSize }) => {
  const route = useRouter();
  const { setMovie } = useContext(MovieContext);
  const handleClick = async () => {
    const response = await api.get(`movie/${data.id}`);

    setMovie(response.data);

    route.push("/details");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{ marginRight: 10 }}
      onPress={() => {
        handleClick();
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
