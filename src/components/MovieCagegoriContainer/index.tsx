import React from "react";
import { Container } from "./MovieCategCont.style";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Popular from "../Popular";
import NowPlayng from "../NowPlayng";
import Upcoming from "../Upcoming";
import TopRated from "../TopRated";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const MovieCategContainer = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Container>
      {/* <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in
        animi perferendis, ipsam voluptates molestias corporis vitae beatae
        autem, unde alias architecto blanditiis dolore officiis id ipsa a sequi
        placeat!
      </Text> */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#3A3F47",
          },
          tabBarLabelStyle: { fontSize: 12, color: "#fff", fontWeight: "700" },
        }}
        sceneContainerStyle={{ backgroundColor: "#3A3F47" }}
      >
        <Tab.Screen
          name="nowplayng"
          options={{
            tabBarLabel: "Em Cartaz",
          }}
          component={NowPlayng}
        />
        <Tab.Screen
          name="upcoming"
          options={{
            tabBarLabel: "Em Alta",
          }}
          component={Upcoming}
        />
        <Tab.Screen
          name="toprated"
          options={{
            tabBarLabel: "+ Votados",
          }}
          component={TopRated}
        />
        <Tab.Screen
          name="popular"
          options={{
            tabBarLabel: "Populares",
          }}
          component={Popular}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default MovieCategContainer;
