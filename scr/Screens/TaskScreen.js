import React, { useState ,useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import AddTask from "./AddTask";
import * as Permissions from 'expo-permissions';
import CustomHeader from './CustomHeader';

const TasksScreen = ({ navigation }) => {
  useEffect(() => {

  }, []);
  const [tasks, setTasks] = useState([]);

  const onAdd = (taskName, isImportant, isUrgent, startTime, endTime) => {
    let priority = 4;
    if (isImportant && isUrgent) {
      priority = 1;
    } else if (isUrgent && !isImportant) {
      priority = 3;
    } else if (isImportant && !isUrgent) {
      priority = 2;
    }
    //const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
    //const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
    let duration = (endTime - startTime)/60000;
    let totalDuration = 0;
    for(let i = 0 ; i < tasks.length ; i++){
      totalDuration += tasks[i].duration;
    }
    if(totalDuration + duration > 720){
      alert('Total duration should be less than 12 hours');
      return;
    }
    const sortedTasks = [
      ...tasks,
      { taskName, priority, duration, startTime, endTime },
    ].sort((a, b) => {
      if (a.startTime < b.startTime) {
        return -1;
      } else if (a.startTime > b.startTime) {
        return 1;
      } else {
        return a.priority - b.priority;
      }
    });
    setTasks(sortedTasks);
  };

  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
    <View>
      <AddTask onAdd={onAdd} />
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task.taskName}</Text>
          <Text>Duration: {task.duration} minutes</Text>
          <Text>
            Start Time: {task.startTime.toLocaleString()}
          </Text>
          <Text>
            End Time: {task.endTime.toLocaleString()}
          </Text>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default TasksScreen;