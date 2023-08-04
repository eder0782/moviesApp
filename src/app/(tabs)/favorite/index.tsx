import { SafeAreaView, Text, View } from "react-native";
import { ViewContainer } from "../../../styles";
import { StatusBar } from "expo-status-bar";

export default function FavotiteMovie() {
  return (
    <ViewContainer>
      <Text
        style={{
          fontSize: 50,
          fontWeight: "700",
          marginTop: 100,
        }}
      >
        Favoritos
      </Text>
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </ViewContainer>
  );
}
