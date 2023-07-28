import { Text, View } from "react-native";
import { ViewContainer } from "../../stylesBasics";

export default function Search() {
  return (
    <ViewContainer>
      <Text
        style={{
          fontSize: 50,
          fontWeight: "700",
          marginTop: 100,
        }}>
        Pesquisa
      </Text>
    </ViewContainer>
  );
}
