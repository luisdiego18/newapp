import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Is the red jacket avaiable?",
    description:
      "Hey hope everything is good, I am really interested in buying the red jacket",
    image: require("../assets/luisDiego.jpeg"),
  },
  {
    id: 2,
    title: "what is the lowest price for the couch?",
    description: "I am interested in getting the couch..",
    image: require("../assets/luisDiego.jpeg"),
  },
  {
    id: 3,
    title: "What is the size of the red jacket?",
    description: "Im size xl, please let me know if the size is xl",
    image: require("../assets/luisDiego.jpeg"),
  },
  {
    id: 4,
    title: "How fast is that car",
    description: "Let me know how fuel efficient is that car.",
    image: require("../assets/luisDiego.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Test1", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
      />
    </Screen>
  );
}

export default MessagesScreen;
