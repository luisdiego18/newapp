import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Sales",
    icon: {
      name: "cash",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My Prospect",
    icon: {
      name: "account-multiple",
      backgroundColor: colors.medium,
    },
  },
  {
    title: "My Stats",
    icon: {
      name: "poll",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Contacts",
    icon: {
      name: "contacts",
      backgroundColor: colors.dark,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Luis Diego"
          subTitle="lhernandez19@my.wctc.edu"
          image={require("../assets/luisDiego.jpeg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
