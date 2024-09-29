import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Title, Paragraph, Card } from "react-native-paper";

const EventDetail = ({ event }) => {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: event.image }} />
        <Card.Content>
          <Title>{event.title}</Title>
          <Paragraph>{event.date}</Paragraph>
          <Paragraph>{event.location}</Paragraph>
          <Paragraph>{event.description}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default EventDetail;
