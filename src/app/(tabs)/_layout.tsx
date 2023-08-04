import { Tabs, router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, Text, TouchableOpacity, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import dark from "../../styles/theme/dark";

export default function AppLayout() {
  return (
    <ThemeProvider theme={dark}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#ECF0F1",
        }}
      >
        <Tabs
          screenOptions={{
            headerStyle: {
              backgroundColor: "#242A32",
            },

            headerTitleStyle: {
              color: "#fff",
            },
            tabBarStyle: {
              backgroundColor: "#242A32",
              borderTopColor: "#0296E5",
            },
            tabBarActiveTintColor: "#0296E5",
            tabBarInactiveTintColor: "#67686D",
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Inicio",
              headerTitle: "O que você quer assistir hoje?",
              tabBarLabelStyle: {
                fontSize: 15,
              },

              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="search/index"
            options={{
              title: "Pesquisa",
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  onPress={() => router.back()}
                >
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={25}
                    color={"#fff"}
                  />
                </TouchableOpacity>
              ),
              tabBarLabelStyle: {
                fontSize: 15,
              },
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="search" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="favorite/index"
            options={{
              title: "Favoritos",
              headerTitleAlign: "center",
              tabBarLabelStyle: {
                fontSize: 15,
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  onPress={() => router.back()}
                >
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={25}
                    color={"#fff"}
                  />
                </TouchableOpacity>
              ),

              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="flag" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
        <StatusBar backgroundColor={"#242A32"} style="light" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
