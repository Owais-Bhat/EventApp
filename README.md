# Event Management App

This project is an **Event Management App** that allows users to browse, search, and book events. It consists of a **frontend mobile app** built with **React Native** and a **backend server** developed using **Node.js** and **Express.js**.

## Table of Contents

- [Frontend Link](#frontend-link)
- [Backend Link](#backend-link)
- [Features](#features)
- [Technologies Used](#technologies-used)
  - Backend
  - Frontend
- [Backend Setup and Running](#backend-setup-and-running)
  - Installation
  - Running the Server
  - API Endpoints
- [Frontend Setup and Running](#frontend-setup-and-running)
  - Installation
  - Running the App
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Frontend Link

Repository for the frontend (React Native):
[https://github.com/Owais-Bhat/EventApp](https://github.com/Owais-Bhat/EventApp)

## Backend Link

Repository for the backend (Node.js/Express):
[https://github.com/Owais-Bhat/event-booking](https://github.com/Owais-Bhat/event-booking)

---

## Features

- **Home Screen**: Displays a grid of events.
- **Event Details**: Displays detailed information about selected events, including an image slider for event photos.
- **Search**: Users can search events by title or location.
- **Event Booking**: Users can book events from the detailed view.
- **Local Storage**: Bookings are stored locally on the user's device.

---

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Framework for building RESTful APIs.
- **CORS**: Middleware for handling cross-origin requests.
- **REST API**: To serve event data and handle search/filter requests.

### Frontend

- **React Native**: For building a cross-platform mobile app.
- **React Native Paper**: Material Design components for the UI.
- **AsyncStorage**: To store event bookings locally on the device.
- **React Navigation**: For screen navigation.
- **FlatList**: To render event images in a slider format.
- **SafeAreaView**: Handles layout on iOS and Android devices.

---

## Backend Setup and Running

### Installation

1. **Clone the Backend Repository**:

   ```bash
   git clone https://github.com/Owais-Bhat/event-booking
   cd event-booking
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Server

1. Start the backend server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

### API Endpoints

| Endpoint         | Method | Description                        |
| ---------------- | ------ | ---------------------------------- |
| `/events`        | GET    | Get all events                     |
| `/events/:id`    | GET    | Get event details by ID            |
| `/events/search` | GET    | Search events by title or location |
| `/events/filter` | GET    | Filter events by date              |

---

## Frontend Setup and Running

### Installation

1. **Clone the Frontend Repository**:

   ```bash
   git clone https://github.com/Owais-Bhat/EventApp
   cd EventApp
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Install Expo CLI** (if not already installed):
   ```bash
   npm install -g expo-cli
   ```

### Running the App

1. Run the app using Expo:

   ```bash
   expo start
   ```

2. Scan the QR code using Expo Go on your mobile device (iOS/Android), or use an emulator.

---

## Screenshots

### Home Screen

- Displays a grid of events with information such as event images, titles, dates, and locations.
- Search bar is available at the top to filter events.

### Event Detail Screen

- Displays detailed event information like title, description, date, location, etc.
- Button to "Book Now" for event booking.

---
