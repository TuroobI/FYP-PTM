import React, { useState } from 'react';
import { View,Text } from 'react-native';

import AddTask from './AddTask';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = (taskName, isImportant, isUrgent) => {
    let priority = 3;
    if (isImportant && isUrgent) {
      priority = 1;
    } else if (isImportant || isUrgent) {
      priority = 2;
    }
    // Sort tasks array based on priority
    const sortedTasks = [...tasks, { taskName, priority }].sort((a, b) => a.priority - b.priority);
    // Add task to tasks array with priority
    setTasks(sortedTasks);
  };

  return (
    <View>
      <AddTask onAdd={onAdd} />
      {tasks.map((task, index) => (
        <Text key={index}>{task.taskName}</Text>
      ))}
    </View>
  );
};

export default TasksScreen;
