import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function DetailsLayot() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onPress={() => router.back()}
            >
              <MaterialIcons name="arrow-back-ios" size={25} color={"#fff"} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <MaterialIcons name="flag" size={25} color={"#fff"} />
            </TouchableOpacity>
          ),

          headerStyle: {
            backgroundColor: "#242A32",
          },

          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
    </Stack>
  );
}
