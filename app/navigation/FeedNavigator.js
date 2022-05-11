import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listing" component={ListingEditScreen} />
    <Stack.Screen name="ListingEdit" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
