import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { api } from "../services/api";
import CardListMovie from "../components/CardListMovie";
import { Title, ViewContainer } from "../stylesBasics";

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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#242A32", paddingTop: 20 }}>
      <StatusBar style="light" />
      <ViewContainer>
        <Title>O que você quer Assistir?</Title>
      </ViewContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#242A32",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 40,
  },
});
