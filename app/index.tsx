import {
  Alert,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSection from "@/components/headerSections";
import SearchBar from "@/components/searchBar";
import { Checkbox } from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";


type ToDoType = {
  id:number;
  task:string;
  isDone: boolean;
}

const Index = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  const todoData = [
    {
      id: 1,
      task: "Task 1",
      isDone: false,
    },
    {
      id: 2,
      task: "Task 2",
      isDone: true,
    },
    {
      id: 3,
      task: "Task 3",
      isDone: false,
    },
    {
      id: 4,
      task: "Task 4",
      isDone: false,
    },
    {
      id: 5,
      task: "Task 5",
      isDone: true,
    },
    {
      id: 6,
      task: "Task 5",
      isDone: true,
    },
  ];

  const [todos,setTodos] = useState<ToDoType[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = () => {
    const newTodo = {
      id : Math.random(),
      task : todoText,
      isDone : false
    };
    todos.push(newTodo);
    setTodos(todos)
    setTodoText('')
  }

  return (
    <View style={styles.containser}>
      <SafeAreaView>
        {/* header section */}
        <HeaderSection textName="ToDo" />

        {/* search bar */}
        <SearchBar />

        <FlatList
          data={todoData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ToDoItem todo={item} />
          )}
        />
        <KeyboardAvoidingView style={styles.addItemContainer} behavior='height'>
          <TextInput placeholder="Add item" value={todoText} onChangeText={(text) => setTodoText(text)} style={{height: '100%', width: '90%'}} />
          <TouchableOpacity onPress={() => addTodo()} style={styles.addItemBtn}>
            <Ionicons name='add-circle-outline' size={26} color={'#333'}/>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <StatusBar barStyle={"dark-content"} />
      </SafeAreaView>
    </View>
  );
};

export default Index;

const ToDoItem = ({todo}: {todo:ToDoType}) => {
  return(
       <View style={styles.cardContainer}>

              {/* card */}
              <View style={styles.card}>

                {/* check-box */}
                <Checkbox
                  value={todo.isDone}
                  color={todo.isDone ? "#02586cff" : undefined}
                />

                {/* todo-text */}
                <Text
                  style={[
                    styles.cardText,
                    todo.isDone && {
                      textDecorationLine: "line-through",
                      color: "gray",
                    },
                  ]}
                >
                  {todo.task}
                </Text>
              </View>

              {/* card-delete-button */}
              <TouchableOpacity
              onPress={() => Alert.alert('Deleted')}
                style={{
                  height: 50,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <Ionicons name="trash" size={26} color={"#333"} />
              </TouchableOpacity>
            </View>
  )}


const styles = StyleSheet.create({
  containser: {
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
  }
});
