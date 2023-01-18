import React, { useState ,useEffect } from "react";
import { View, Text } from "react-native";
import AddTask from "./AddTask";
import * as Permissions from 'expo-permissions';
import CustomHeader from './CustomHeader';
const TasksScreen = ({ navigation }) => {
  useEffect(() => {
    async function requestPermission() {
      const { status } =  await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        alert('You need to enable notifications in order to receive deadline reminders.');
      }
    }
    requestPermission();
  }, []);
  const [tasks, setTasks] = useState([]);
  
  const onAdd = (taskName, isImportant, isUrgent, date, time) => {
  let priority = 4;
  if (isImportant && isUrgent) {
  priority = 1;
  } else if (isUrgent && !isImportant) {
  priority = 2;
  } else if (isImportant && !isUrgent) {
  priority = 3;
  }
  // Sort tasks array based on deadline and priority
  const sortedTasks = [
  ...tasks,
  { taskName, priority, date, time },
  ].sort((a, b) => {
  const deadlineA = new Date(
  a.date.toDateString() + " " + a.time.toLocaleTimeString()
  );
  const deadlineB = new Date(
  b.date.toDateString() + " " + b.time.toLocaleTimeString()
  );
  if (deadlineA < deadlineB) {
  return -1;
  } else if (deadlineA > deadlineB) {
  return 1;
  } else {
  return a.priority - b.priority;
  }
  });
  // Add task to tasks array with priority and deadline
  setTasks(sortedTasks);
  };
  
  return (
  <View>
  <AddTask onAdd={onAdd} />
  {tasks.map((task, index) => (
  <View key={index}>
  <Text>{task.taskName}</Text>
  <Text>
  Deadline: {task.date.toDateString()} {task.time.toLocaleTimeString()}
  </Text>
  </View>
  ))}
  </View>
  );
  };
  TasksScreen.navigationOptions = ({ navigation }) => {
    return {
      header: () => <CustomHeader navigation={navigation} />
    };
  };
  export default TasksScreen;