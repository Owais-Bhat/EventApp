import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient colors={["#87A2FF", "#FFD7C4"]} style={styles.background}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default GradientBackground;
