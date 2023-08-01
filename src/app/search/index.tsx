import { Text, View } from "react-native";
import {
  // PlacreHolderTextColor,
  SearshInput,
  ViewContainer,
} from "../../styles";
import { TouchableOpacity } from "react-native";

export default function Search() {
  return (
    <ViewContainer>
      <SearshInput placeholder="PESQUISAR" />
    </ViewContainer>
  );
}
