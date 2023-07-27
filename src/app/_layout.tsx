import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Pesquisa",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="flag" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
