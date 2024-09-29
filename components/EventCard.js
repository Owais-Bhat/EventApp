import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Card style={styles.card}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <Card.Content>
          <Title style={styles.title}>{event.title}</Title>
          <Paragraph style={styles.date}>{event.date}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%", // Take 48% of width to fit 2 cards in a row
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#888",
  },
});

export default EventCard;
