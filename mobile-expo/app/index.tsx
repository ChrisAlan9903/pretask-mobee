import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-purple-200">
      <Text className="text-2xl my-3 font-semibold">This is homepage</Text>
      <View className="gap-4">
        <Link
          href="/scanner"
          className="p-4 border-2 border-red-600 text-center"
        >
          Scanner
        </Link>
        <Link
          className="p-4 border-2 border-blue-600 text-center"
          href={{
            pathname: "/cars/[carId]",
            params: { carId: "3" },
          }}
        >
          Go to Car Detail page
        </Link>
      </View>
    </View>
  );
}
