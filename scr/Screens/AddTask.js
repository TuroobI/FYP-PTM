import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeText = (text) => setTaskName(text);

  const onPress = () => {
    onAdd(taskName, isImportant, isUrgent, date, time);
    setTaskName("");
    setIsImportant(false);
    setIsUrgent(false);
    setDate(new Date());
    setTime(new Date());
    setShowDatePicker(false);
    setShowTimePicker(false);
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
      <Button title="Select deadline" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setDate(selectedDate);
            setShowTimePicker(true);
          }}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            setTime(selectedTime);
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
