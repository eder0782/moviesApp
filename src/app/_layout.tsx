import { Tabs, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useState, useEffect } from "react";


export default function AppLayout() {
 
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ECF0F1" }}>   
   
      <StatusBar backgroundColor={"#242A32"} style="light" />
      
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
            tabBarLabelStyle: {
              fontSize: 15,
            },
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="flag" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
