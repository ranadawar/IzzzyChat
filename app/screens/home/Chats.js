import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatComponent from "../../components/ChatComponent";
const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Chats = ({ data = messages }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatComponent
            image={item.image}
            name={item.image}
            lastMessage={item.lastMessage}
          />
        )}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
