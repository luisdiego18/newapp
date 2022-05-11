import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingScreen from "../screens/ListingScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Listing"
      component={ListingScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="home"
            size={25}
            color={colors.secondary}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MessageScreen"
      component={MessagesScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="email"
            size={25}
            color={colors.secondary}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account"
            size={25}
            color={colors.secondary}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
