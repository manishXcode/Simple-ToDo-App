import {

  Dimensions,
  StatusBar,
  StyleSheet,
  Text,

  TextInput,

  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";




const Index = () => {

  return (
    <KeyboardAwareScrollView bottomOffset={62} contentContainerStyle={styles.container}>
      <SafeAreaView>
       <Text>Manish Yadhuvanshi</Text>
       <TextInput placeholder="Enter Name" style={styles.inputBox} />
        <StatusBar barStyle={"dark-content"} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Index;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  cardContainer: {
    height: 50,
    width: Dimensions.get("screen").width - 40,
    backgroundColor: "#fff",
    marginBottom: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: "#02586cff",
    borderRadius: 12,
  },
  card: {
    width: "90%",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addItemContainer:{
    width: Dimensions.get('screen').width -40,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  addItemBtn:{
    height: 60,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox:{
    height: 50,
    width: Dimensions.get('screen').width - 40,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  }
});
