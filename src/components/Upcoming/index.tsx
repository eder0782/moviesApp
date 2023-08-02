import React from "react";
import { View, Text } from "react-native";
import { ImageProps, Movie } from "../../@types/types";
import { dados } from "../../services/data.teste";
import ListMovie from "../ListMovie";

type IProps = {
  imageSize: ImageProps;
  data: Movie;
};

const Upcoming: React.FC = () => {
  const imageSize: ImageProps = {
    height: 145,
    width: 100,
  };
  // console.log(imageSize, "NowPlayng:");
  return (
    <View style={{ flex: 1 }}>
      <ListMovie imageSize={imageSize} data={dados} />
    </View>
  );
};

export default Upcoming;
