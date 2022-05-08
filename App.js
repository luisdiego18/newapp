import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/TextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

/* <AppPicker
selectedItem={category}
onSelectItem={(item) => setCategory(item)}
items={categories}
icon="apps"
placeholder="Category"
/>
<AppTextInput icon="email" placeholder="Email" /> */
