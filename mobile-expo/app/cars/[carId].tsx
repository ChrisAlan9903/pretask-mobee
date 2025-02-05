import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { CarResponse, getOneCar } from "@/services/cars.service";

export default function CarDetailPage() {
  const { carId } = useLocalSearchParams();
  const [carData, setCarData] = useState<CarResponse>(null);

  async function getCarDetail(id: string) {
    const data = await getOneCar(id);
    setCarData(data[0]);
    console.log(data[0]);
  }

  useEffect(() => {
    if (typeof carId === "string") {
      getCarDetail(carId);
    }
  }, [carId]);

  return (
    <View>
      <Text>CarDetailPage</Text>
      <Text>Car URL = {carId}</Text>
      {carData ? (
        <View>
          <Text>Car Brand: {carData.brand}</Text>
          <Text>Car Model: {carData.model}</Text>
          <Text>Car Variant: {carData.variant}</Text>
          <Text>Car Transmission: {carData.transmission}</Text>
          <Text>Car Manufacture Date: {carData.manufacture_year}</Text>
        </View>
      ) : (
        <View>
          <Text>Car does not exist.</Text>
        </View>
      )}
    </View>
  );
}
