import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ImageProps, Movie } from "../../@types/types";
// import { dados } from "../../services/data.teste";
import ListMovie from "../ListMovie";
import { api } from "../../services/api";

const Popular: React.FC = () => {
  const imageSize: ImageProps = {
    height: 145,
    width: 100,
  };
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const getMovies = async () => {
    const response = await api.get("/movie/popular", {
      params: {
        page,
      },
    });
    setDiscoveryMovies(response.data.results);
    setPage(page + 1);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ListMovie imageSize={imageSize} data={discoveryMovies} />
    </View>
  );
};

export default Popular;
