import { View } from "react-native";
import HighMovie from "../../components/Home/HighMovie";
import MovieCategContainer from "../../components/Home/MovieCagegoriContainer";
import { api } from "../../services/api";
// import CardListMovie from "../../components/CardListMovie";
import { ViewContainer, SearshInput } from "../../styles";
import { StatusBar } from "expo-status-bar";
import { GenreMovieContext } from "../../utilites/context/GenereMovieContext";
import { useContext, useEffect } from "react";
// import { api } from "../../services/api";

// import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const { genreMovie, setGenreMovie } = useContext(GenreMovieContext);

  const getGenreMovie = async () => {
    const response = await api.get("genre/movie/list");

    setGenreMovie(response.data.genres);
  };
  useEffect(() => {
    getGenreMovie();
  }, []);
  return (
    <ViewContainer>
      {/* <StatusBar backgroundColor={"#242A32"} style="light" /> */}
      <View>
        <SearshInput placeholder="PESQUISAR" />

        <HighMovie />
        <View>
          <MovieCategContainer />
        </View>
      </View>
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </ViewContainer>
  );
}
