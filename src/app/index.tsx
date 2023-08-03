import { StyleSheet, View } from "react-native";

import { useEffect, useState } from "react";
import HighMovie from "../components/HighMovie";
import MovieCategContainer from "../components/MovieCagegoriContainer";

import { api } from "../services/api";
import CardListMovie from "../components/CardListMovie";
import { Title, ViewContainer, SearshInput } from "../styles";
import { StatusBar } from "expo-status-bar";
// import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
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
