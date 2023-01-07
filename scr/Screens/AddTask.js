import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const onChangeText = (text) => setTaskName(text);

  const onPress = () => {
    onAdd(taskName);
    setTaskName('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={onChangeText}
        placeholder="Enter task name"
      />
      <Button title="Add" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default AddTask;