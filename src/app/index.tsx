import { StyleSheet } from "react-native";

import { useEffect, useState } from "react";
import HighMovie from "../components/HighMovie";

import { api } from "../services/api";
import CardListMovie from "../components/CardListMovie";
import {
  Title,
  ViewContainer,
  SearshInput,
  PlacreHolderTextColor,
} from "../stylesBasics";
import { StatusBar } from "expo-status-bar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export default function App() {
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  // const isFocused = useIsFocused();

  const getMovies = async () => {
    const response = await api.get("/movie/top_rated", {
      params: {
        page,
      },
    });
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setPage(page + 1);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <ViewContainer>
      {/* <StatusBar backgroundColor={"#242A32"} style="light" /> */}
      <SearshInput
        placeholder="PESQUISAR"
        placeholderTextColor={PlacreHolderTextColor}
      />
      <HighMovie/>
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
  },
});
