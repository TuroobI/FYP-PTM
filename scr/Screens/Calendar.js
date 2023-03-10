import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import * as Calendar from "expo-calendar";

async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync(
    Calendar.EntityTypes.EVENT
  );
  const defaultCalendars = calendars.filter(
    (each) => each.source.name === "Default"
  );
  return defaultCalendars.length2
    ? defaultCalendars[0].source
    : calendars[0].source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "Expo Calendar",
    color: "blue",
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
  return newCalendarID;
}
const CalendarScreen = () => {
  const addNewEvent =  () => {
    conststate = { status: 'not requested' };
    this.setState({ status: 'requesting permission' });
    const { status } =  Permissions.askAsync(Permissions.CALENDAR);
    if (status === 'granted') {
      this.setState({ status: 'creating event' });
      const eventId =  Calendar.createEventAsync(Calendar.DEFAULT, {
        title: 'A brand new event',
        startDate: moment('2018-05-11 10:30 a.m.', 'YYYY-MM-DD h:mm a'),
        endDate: moment('2018-05-11 11:30 a.m.', 'YYYY-MM-DD h:mm a'),
        timeZone: 'America/Phoenix',
      });
      this.setState({ status: 'event created', eventId });
    }
  };
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [friendNameText, setFriendNameText] = useState("");
  const startDate = selectedStartDate
    ? selectedStartDate.format("YYYY-MM-DD").toString()
    : "";
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={setFriendNameText}
        value={friendNameText}
        placeholder="Enter the name of your friend"
        style={styles.input}
      />
      <CalendarPicker onDateChange={setSelectedStartDate} />
      <Text style={styles.dateText}>Birthday: {startDate}</Text>
      <Button title={"Add to calendar"} onPress={addNewEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 25,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
    margin: 10,
  },
});

export default CalendarScreen;
