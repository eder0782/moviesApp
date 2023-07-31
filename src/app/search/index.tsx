import { Text, View } from "react-native";
import {
  PlacreHolderTextColor,
  SearshInput,
  ViewContainer,
} from "../../stylesBasics";

export default function Search() {
  return (
    <ViewContainer>
      <SearshInput
        placeholder="PESQUISAR"
        placeholderTextColor={PlacreHolderTextColor}
      />
    </ViewContainer>
  );
}
