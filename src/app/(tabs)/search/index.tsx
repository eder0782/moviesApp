import { Text, View } from "react-native";
import {
  // PlacreHolderTextColor,
  SearshInput,
  ViewContainer,
} from "../../../styles";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Search() {
  return (
    <ViewContainer>
      <SearshInput placeholder="PESQUISAR" />
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </ViewContainer>
  );
}
