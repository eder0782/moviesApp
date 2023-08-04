import { Stack, router } from "expo-router";
import { ThemeProvider } from "styled-components";
import dark from "../styles/theme/dark";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MovieProvider } from "../utilites/context/MovieContext";

export default function RootLayout() {
  return (
    <ThemeProvider theme={dark}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#ECF0F1",
        }}
      >
        <MovieProvider>
          <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details" options={{ headerShown: false }} />
          </Stack>
        </MovieProvider>
      </SafeAreaView>
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </ThemeProvider>
  );
}
