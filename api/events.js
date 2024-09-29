// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Music Concert",
    description: "Join us for a night of great music and fun.",
    date: "2024-10-01",
    location: "City Stadium",
    image:
      "https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve_23-2150902036.jpg?t=st=1727541847~exp=1727545447~hmac=643962d94602334c4c0e48db2a586aa11ee7f80580b1892e58379615ea145dda&w=900",
  },
  {
    id: 2,
    title: "Art Exhibition",
    description: "Explore the latest in contemporary art.",
    date: "2024-10-10",
    location: "Art Gallery",
    image: "https://example.com/exhibition.jpg",
  },
  {
    id: 3,
    title: "Food Festival",
    description: "Taste the flavors from around the world.",
    date: "2024-10-15",
    location: "Central Park",
    image: "https://example.com/foodfestival.jpg",
  },
];

// Function to simulate fetching events
const fetchEvents = async () => {
  // Simulating network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 1000); // 1 second delay
  });
};

export { fetchEvents };
