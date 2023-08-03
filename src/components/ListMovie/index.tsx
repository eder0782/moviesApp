import { FlatList } from "react-native-gesture-handler";
import { ImageProps, Movie } from "../../@types/types";
import CardMovie from "../CardMovie";
import { Container } from "./ListMovie.style";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

type IProps = {
  imageSize: ImageProps;
  data: Movie[];
};

const ListMovie: React.FC<IProps> = ({ data, imageSize }) => {
  return (
    <Container>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
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
