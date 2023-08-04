import { ScrollView, View, Text } from "react-native";
import CardMovie from "../CardMovie";
import { ContainerScroll, TextNumber } from "./HighMovie.style";
import { ImageProps, Movie } from "../../../@types/types";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { imageSizeHighMovies } from "../../../styles/defaultValues";

export default function HighMovie() {
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const response = await api.get("/trending/movie/day", {
      params: {
        page,
      },
    });
    setDiscoveryMovies(response.data.results);
    setPage(page);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <ContainerScroll>
      {discoveryMovies.map((item, ind) => (
        <View key={item.id} style={{ marginLeft: 10 }}>
          <CardMovie imageSize={imageSizeHighMovies} data={item} />
          <TextNumber>{ind + 1}</TextNumber>
        </View>
      ))}
    </ContainerScroll>
  );
}
