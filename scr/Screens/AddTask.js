import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const onChangeText = (text) => setTaskName(text);

  const onPress =  () => {
    //const duration = endTime - startTime;
    onAdd(taskName, isImportant, isUrgent, startTime, endTime);
    setTaskName("");
    setIsImportant(false);
    setIsUrgent(false);
    setStartTime(new Date());
    setEndTime(new Date());
    setShowStartTimePicker(false);
    setShowEndTimePicker(false);
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
      <Button title="Select start time" onPress={() => setShowStartTimePicker(true)} />
      {showStartTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedStartTime) => {
            setShowStartTimePicker(false);
            setStartTime(selectedStartTime);
          }}
        />
      )}
      <Button title="Select end time" onPress={() => setShowEndTimePicker(true)} />
      {showEndTimePicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedEndTime) => {
            setShowEndTimePicker(false);
            setEndTime(selectedEndTime);
          }}
        />
      )}
      <Button title="Add" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
export default AddTask;
