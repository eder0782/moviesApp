import { Text, View } from "react-native";

export default function Search() {
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
        Pesquisa
      </Text>
    </View>
  );
}
