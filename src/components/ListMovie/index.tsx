import { FlatList } from "react-native-gesture-handler";
import { ImageProps, Movie } from "../../@types/types";
import CardMovie from "../CardMovie";
import { Container } from "./ListMovie.style";
import { View } from "react-native";

type IProps = {
  imageSize: ImageProps;
  data: Movie[];
};

const ListMovie: React.FC<IProps> = ({ data, imageSize }) => {
  //   console.log(imageSize, "ListMovie:");
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <CardMovie imageSize={imageSize} data={item} />
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
        numColumns={3}
        style={{
          marginBottom: 50,
        }}
      />
    </Container>
  );
};

export default ListMovie;
