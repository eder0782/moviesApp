import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { api } from "../services/api";
import CardListMovie from "../components/CardListMovie";

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
      style={{ flex: 1, backgroundColor: "#242A32", paddingTop: 20 }}
    >
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {discoveryMovies ? (
        <FlatList
          data={discoveryMovies}
          numColumns={3}
          removeClippedSubviews
          renderItem={(item) => (
            <View
              style={{
                padding: 25,
                width: "100%",

                marginRight: 100,
                marginBottom: 10,
                backgroundColor: "gray",
                flexDirection: "column",

                // justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                {item.item.title}
              </Text>
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700" }}>
                Nota: {item.item.vote_average}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            // flex: 1,
            padding: 35,
            paddingBottom: 100,
          }}
          onEndReached={() => getMovies()}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <></>
      )}
      <StatusBar style="light" />
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
