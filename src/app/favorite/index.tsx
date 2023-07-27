import { Text, View } from "react-native";

export default function FavotiteMovie() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "700",
          marginTop: 100,
        }}
      >
        Favoritos
      </Text>
    </View>
  );
}
