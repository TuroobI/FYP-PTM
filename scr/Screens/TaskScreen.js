import React, { useState } from 'react';
import { View,Text } from 'react-native';

import AddTask from './AddTask';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  return (
    <View>
      <AddTask onAdd={onAdd} />
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
};

export default TasksScreen;
