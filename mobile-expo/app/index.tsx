import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-purple-200">
      <Text className="my-3 text-2xl font-semibold">This is homepage</Text>
      <View className="gap-4">
        <Link
          href="/scanner"
          className="p-4 text-center border-2 border-red-600"
        >
          Scan QR Code
        </Link>
      </View>
    </View>
  );
}
