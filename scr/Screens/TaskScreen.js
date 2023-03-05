import { duration } from "moment/moment";
import React, { useState } from "react";
import { View, Text } from "react-native";
import AddTask from "./AddTask";

import { ScrollView } from "react-native";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState({});
  let previousTaskEndTime = 12; // Assume previous task ended at 12pm

  const onAdd = (taskName, isImportant, isUrgent, date, time, duration) => {
    let priority = 4;
    if (isImportant && isUrgent) {
      priority = 1;
    } else if (isUrgent && !isImportant) {
      priority = 3;
    } else if (isImportant && !isUrgent) {
      priority = 4;
    }
    // Sort tasks array based on deadline and priority
    const sortedTasks = [
      ...tasks,
      { taskName, priority, date, time, duration },
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
    setStatus({ ...status, [taskName]: "incomplete" });
    setTasks(sortedTasks);
  };

  const updateStatus = (taskName) => {
    // logic to open a pop-up component for user to update task status
    // ...
    //git check
    if (status[taskName] === "incomplete") {
      setStatus({ ...status, [taskName]: "complete" });
    } else if (status[taskName] === "complete") {
      setStatus({ ...status, [taskName]: "not done" });
    } else {
      setStatus({ ...status, [taskName]: "incomplete" });
    }
  };
  // Function to calculate the available slots based on task duration and previous task end time
  const calculateSlots = (duration, prevTaskEndTime) => {
    let availableSlots = [];
    let start = prevTaskEndTime;
    // Loop through the slots array starting from the previous task end time
    for (let i = 0; i < duration; i++) {
      availableSlots.push(start++ + ":00");
    }
    previousTaskEndTime = start; // Update previous task end time
    return availableSlots;
  };

  return (
    <ScrollView style={{ height: "100%", width: "100%" }}>
      <View>
        <AddTask onAdd={onAdd} />
        {tasks.map((task, index) => (
          <View key={index}>
            <Text onPress={() => updateStatus(task.taskName)}>
              {task.taskName}
            </Text>
            <Text>
              Deadline: {task.date.toDateString()}{" "}
              {task.time.toLocaleTimeString()}
            </Text>
            <Text>Status: {status[task.taskName]}</Text>
            <Text>
              Available slots:{" "}
              {calculateSlots(task.duration, previousTaskEndTime)}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TasksScreen;
