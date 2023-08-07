import React from "react";
import { Container } from "./TabsDerails.style";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Review from "./Tabs/Review";
import Cast from "./Tabs/Cast";
import AbautMovie from "./Tabs/Abaut";

const TabDetails: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Container>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#242A32",
          },
          tabBarLabelStyle: { fontSize: 12, color: "#fff", fontWeight: "700" },
        }}
        sceneContainerStyle={{ backgroundColor: "#242A32" }}
      >
        <Tab.Screen
          name="abautmovie"
          options={{
            tabBarLabel: "Sobre o Filme",
          }}
          component={AbautMovie}
        />
        <Tab.Screen
          name="reviewMovie"
          options={{
            tabBarLabel: "Review",
          }}
          component={Review}
        />
        <Tab.Screen
          name="castmovie"
          options={{
            tabBarLabel: "Elenco",
          }}
          component={Cast}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default TabDetails;
