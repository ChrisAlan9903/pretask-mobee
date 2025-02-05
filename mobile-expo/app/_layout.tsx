import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="scanner" options={{ title: "QR Scanner" }} />
      <Stack.Screen name="cars/[carId]" options={{ title: "Car Detail" }} />
    </Stack>
  );
}
