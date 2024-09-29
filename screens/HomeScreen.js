import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Appbar, Card, Title, Paragraph, Searchbar } from "react-native-paper";
import GradientBackground from "../components/GradientBackground";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.43.155:5000/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBookings = async () => {
      const storedBookings = await AsyncStorage.getItem("bookings");
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }
    };

    fetchEvents();
    fetchBookings();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSearchChange = (query) => {
    setSearchQuery(query);
  };

  if (loading) {
    return (
      <GradientBackground>
        <ActivityIndicator size="large" />
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onSearchChange}
          value={searchQuery}
          style={styles.searchBar}
        />
        <ScrollView>
          <View style={styles.gridContainer}>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onPress={() => navigation.navigate("EventDetail", { event })}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover
          style={{ height: 200, resizeMode: "contain" }}
          source={{ uri: event.images }}
        />
        <Card.Content>
          <Title style={styles.title}>{event.title}</Title>
          <Paragraph style={styles.date}>{event.date}</Paragraph>
          <Paragraph>{event.location}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  cardContainer: {
    width: "48%",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  card: {
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#888",
  },
  searchBar: {
    margin: 10,
  },
});

export default HomeScreen;
