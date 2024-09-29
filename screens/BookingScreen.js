import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import GradientBackground from "../components/GradientBackground";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookingScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventId, setEventId] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBooking = async () => {
    // Basic validation
    if (!name || !email || !eventId) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return;
    }

    const ticketCount = parseInt(eventId, 10);
    if (isNaN(ticketCount) || ticketCount <= 0) {
      Alert.alert(
        "Validation Error",
        "Please enter a valid number of tickets."
      );
      return;
    }

    const newBooking = { name, email, eventId };

    // Save the booking to AsyncStorage
    const storedBookings = await AsyncStorage.getItem("bookings");
    const bookings = storedBookings ? JSON.parse(storedBookings) : [];
    bookings.push(newBooking);
    await AsyncStorage.setItem("bookings", JSON.stringify(bookings));

    Alert.alert("Success", "Booking has been made!", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  return (
    <GradientBackground>
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Booking Details"
          style={{ flex: 1, color: "white" }}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Number of Tickets"
          mode="outlined"
          value={eventId}
          onChangeText={setEventId}
          keyboardType="numeric" // Ensures only numbers are input
          style={styles.input}
        />
        <Button mode="contained" onPress={handleBooking} style={styles.button}>
          Submit Booking
        </Button>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default BookingScreen;
