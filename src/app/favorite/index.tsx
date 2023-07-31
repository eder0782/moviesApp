import { SafeAreaView, Text, View } from "react-native";
import { ViewContainer } from "../../stylesBasics";

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
    </ViewContainer>
  );
}
