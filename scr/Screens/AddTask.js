import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';

const AddTask = ({ onAdd }) => {
  
  const [taskName, setTaskName] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);

  const onChangeText = (text) => setTaskName(text);

  const onPress = () => {
    onAdd(taskName, isImportant, isUrgent);
    setTaskName('');
    setIsImportant(false);
    setIsUrgent(false);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={onChangeText}
        placeholder="Enter task name"
      />
      <CheckBox value={isImportant} onValueChange={setIsImportant} />
      <Text>Important</Text>
      <CheckBox value={isUrgent} onValueChange={setIsUrgent} />
      <Text>Urgent</Text>
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