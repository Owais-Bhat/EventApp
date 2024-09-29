// components/BookingForm.js
import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { TextInput, Snackbar } from "react-native-paper";
import Animated from "react-native-reanimated";
import GradientBackground from "./GradientBackground"; // Import gradient background

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState("1");
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const handleSubmit = () => {
    const bookingInfo = { name, email, tickets: parseInt(tickets) };
    onSubmit(bookingInfo);
    onToggleSnackBar();
    // Clear the form after booking
    setName("");
    setEmail("");
    setTickets("1");
  };

  return (
    <Animated.View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Number of Tickets"
        value={tickets}
        onChangeText={setTickets}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Book Now" onPress={handleSubmit} />
      <Snackbar visible={visible} onDismiss={onToggleSnackBar} duration={3000}>
        Booking Confirmed!
      </Snackbar>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff", // Light background for better contrast
    borderRadius: 10,
    elevation: 5, // Shadow effect
  },
  input: {
    marginBottom: 10,
  },
});

export default BookingForm;
