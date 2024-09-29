import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import GradientBackground from "../components/GradientBackground";

const { width: viewportWidth } = Dimensions.get("window");

const EventDetailScreen = ({ route, navigation }) => {
  const { event } = route.params;

  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* Display only the first image of the event */}
        <Image source={{ uri: event.images }} style={styles.image} />

        {/* Event details */}
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.location}>{event.location}</Text>
        <Text style={styles.description}>{event.description}</Text>

        {/* Button to book the event */}
        <Button
          title="Book Now"
          onPress={() => navigation.navigate("Booking", { event })}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  image: {
    width: viewportWidth * 0.9, // Adjust to 90% of viewport width
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 10,
  },
  location: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});

export default EventDetailScreen;
