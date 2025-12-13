import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const headerSection = ({textName}: {textName: string}) => {
  return (
    <View style={styles.headerSection}>
      <Ionicons name="menu" size={26} color={"#000"} onPress={() => Alert.alert('Perssed', 'Menu button pressed')} />
      <Text style={styles.headerText}>{textName}</Text>
      <Ionicons name="person-outline" size={26} color={"#000"} onPress={() => Alert.alert('Pressed', 'Profile button pressed')} />
    </View>
  );
};

export default headerSection;

const styles = StyleSheet.create({
  headerSection: {
    height: 50,
    width: Dimensions.get("screen").width - 40,
    flexDirection: "row",
    marginBottom: 18,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
