import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant.screen";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index.js";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </div>
  );
}

// const styles = StyleSheet.create({
// });
